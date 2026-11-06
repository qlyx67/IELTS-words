'use strict';

const byId = id => document.getElementById(id);
const topic = byId('topic');
const search = byId('search');
const modeButtons = [...document.querySelectorAll('[data-mode]')];
const groups = [...new Set(words.map(word => word.topic))];
const pageSize = 20;
let mode = 'browse';
let page = 0;
let round = [];
let selected = null;
let matched = new Set();
let spellingQueue = [];
let question;
let checked = false;

for (const group of groups) topic.add(new Option(group, group));

function pool() {
  return topic.value ? words.filter(word => word.topic === topic.value) : words;
}

function shuffle(entries) {
  const copy = [...entries];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function button(label, action) {
  const control = document.createElement('button');
  control.type = 'button';
  control.textContent = label;
  control.addEventListener('click', action);
  return control;
}

function showWord(word) {
  byId('detail-word').textContent = word.term;
  byId('detail-pos').textContent = word.pos + ' · ' + word.topic;
  byId('detail-meaning').textContent = word.meaning;
  byId('detail-example').textContent = word.example;
  byId('detail').showModal();
}

function renderList() {
  const query = search.value.trim().toLowerCase();
  const results = pool().filter(word => word.term.includes(query) || word.meaning.includes(query));
  const pages = Math.ceil(results.length / pageSize);
  page = Math.max(0, Math.min(page, pages - 1));
  const visible = results.slice(page * pageSize, (page + 1) * pageSize);
  byId('word-list').replaceChildren(...visible.map(word => button(word.term, () => showWord(word))));
  byId('empty').hidden = results.length > 0;
  byId('paging').hidden = pages < 2;
  byId('page-number').textContent = (page + 1) + ' / ' + pages;
  byId('prev').disabled = page === 0;
  byId('next').disabled = page >= pages - 1;
}

function feedback(id, message, style = '') {
  const element = byId(id);
  element.textContent = message;
  element.className = 'feedback ' + style;
}

function startMatch() {
  const previous = new Set(round);
  const candidates = shuffle(pool());
  const ordered = [...candidates.filter(word => !previous.has(word)), ...candidates.filter(word => previous.has(word))];
  const terms = new Set();
  const meanings = new Set();
  round = [];
  for (const word of ordered) {
    if (terms.has(word.term) || meanings.has(word.meaning)) continue;
    terms.add(word.term);
    meanings.add(word.meaning);
    round.push(word);
    if (round.length === 10) break;
  }
  selected = null;
  matched = new Set();
  const left = new Map();
  const right = new Map();
  for (const word of shuffle(round)) {
    const control = button(word.term, () => {
      if (selected) left.get(selected).setAttribute('aria-pressed', 'false');
      selected = word;
      control.setAttribute('aria-pressed', 'true');
      feedback('match-feedback', matched.size + ' / ' + round.length);
    });
    control.setAttribute('aria-pressed', 'false');
    left.set(word, control);
  }
  for (const word of shuffle(round)) {
    right.set(word, button(word.meaning, () => {
      if (!selected) {
        feedback('match-feedback', '请先选一个英文单词。');
        return;
      }
      if (selected !== word) {
        feedback('match-feedback', '这两个不匹配，再试一次。', 'bad');
        return;
      }
      matched.add(word);
      selected = null;
      left.get(word).setAttribute('aria-pressed', 'false');
      left.get(word).disabled = true;
      right.get(word).disabled = true;
      const nextWord = round.find(entry => !matched.has(entry));
      if (nextWord) left.get(nextWord).focus();
      else byId('new-round').focus();
      feedback('match-feedback', nextWord ? matched.size + ' / ' + round.length : '全部配对成功！按 Enter 可以换一组。', 'good');
    }));
  }
  byId('english').replaceChildren(...left.values());
  byId('chinese').replaceChildren(...right.values());
  feedback('match-feedback', '0 / ' + round.length);
}

function nextSpelling(focus = true) {
  if (!spellingQueue.length) {
    spellingQueue = shuffle(pool());
    if (spellingQueue.length > 1 && spellingQueue.at(-1) === question) {
      spellingQueue.unshift(spellingQueue.pop());
    }
  }
  question = spellingQueue.pop();
  checked = false;
  byId('spell-clue').textContent = question.pos + ' · ' + question.meaning;
  byId('spell-hint').textContent = '首字母 ' + question.term[0].toUpperCase() + ' · ' + question.term.replaceAll(' ', '').length + ' 个字母';
  const answer = byId('answer');
  answer.value = '';
  answer.readOnly = false;
  byId('submit').textContent = '提交';
  feedback('spell-feedback', '');
  if (focus) answer.focus();
}

byId('spell-form').addEventListener('submit', event => {
  event.preventDefault();
  if (checked) return nextSpelling();
  const answer = byId('answer');
  const value = answer.value.trim().toLowerCase().replace(/\s+/g, ' ');
  if (!value) {
    feedback('spell-feedback', '先输入一个答案。');
    answer.focus();
    return;
  }
  checked = true;
  answer.readOnly = true;
  const correct = value === question.term;
  feedback('spell-feedback', correct ? '拼写正确！' : '正确拼写是 ' + question.term, correct ? 'good' : 'bad');
  byId('submit').textContent = '下一题';
  byId('submit').focus();
});

function refresh() {
  byId('count').textContent = pool().length + ' 个词';
  if (mode === 'browse') renderList();
  if (mode === 'match') startMatch();
  if (mode === 'spell') nextSpelling();
}

for (const control of modeButtons) {
  control.addEventListener('click', () => {
    if (mode === control.dataset.mode) return;
    mode = control.dataset.mode;
    for (const tab of modeButtons) {
      const active = tab === control;
      tab.setAttribute('aria-pressed', String(active));
      byId(tab.dataset.mode).hidden = !active;
    }
    refresh();
  });
}

topic.addEventListener('change', () => {
  page = 0;
  spellingQueue = [];
  refresh();
});
search.addEventListener('input', () => { page = 0; renderList(); });
byId('prev').addEventListener('click', () => { page--; renderList(); });
byId('next').addEventListener('click', () => { page++; renderList(); });
byId('new-round').addEventListener('click', startMatch);
refresh();
