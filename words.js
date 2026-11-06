const words = [
  {
    "topic": "自然地理",
    "term": "altitude",
    "pos": "n.",
    "meaning": "海拔；高度",
    "example": "Water boils at a lower temperature at high altitude."
  },
  {
    "topic": "自然地理",
    "term": "atmosphere",
    "pos": "n.",
    "meaning": "大气层；气氛",
    "example": "The atmosphere in the study room became quieter after lunch."
  },
  {
    "topic": "自然地理",
    "term": "carbon dioxide",
    "pos": "n.",
    "meaning": "二氧化碳",
    "example": "The sensors measure carbon dioxide levels inside the building."
  },
  {
    "topic": "自然地理",
    "term": "climate",
    "pos": "n.",
    "meaning": "气候",
    "example": "A warmer climate could change when crops are planted."
  },
  {
    "topic": "自然地理",
    "term": "contaminate",
    "pos": "v.",
    "meaning": "污染",
    "example": "Floodwater can contaminate local wells."
  },
  {
    "topic": "自然地理",
    "term": "continent",
    "pos": "n.",
    "meaning": "洲；大陆",
    "example": "The disease spread slowly across the continent."
  },
  {
    "topic": "自然地理",
    "term": "crust",
    "pos": "n.",
    "meaning": "地壳；外壳",
    "example": "Most earthquakes begin within the Earth's crust."
  },
  {
    "topic": "自然地理",
    "term": "damp",
    "pos": "adj.",
    "meaning": "潮湿的",
    "example": "The soil was still damp after three dry days."
  },
  {
    "topic": "自然地理",
    "term": "debris",
    "pos": "n.",
    "meaning": "碎片；残骸",
    "example": "Workers removed debris from the river after the storm."
  },
  {
    "topic": "自然地理",
    "term": "deforest",
    "pos": "v.",
    "meaning": "砍伐森林",
    "example": "Companies may deforest hillsides to create more farmland."
  },
  {
    "topic": "自然地理",
    "term": "degrade",
    "pos": "v.",
    "meaning": "使退化；降低质量",
    "example": "Heavy rain can degrade poorly protected soil."
  },
  {
    "topic": "自然地理",
    "term": "delta",
    "pos": "n.",
    "meaning": "三角洲",
    "example": "Many farmers depend on the fertile soil in the delta."
  },
  {
    "topic": "自然地理",
    "term": "desert",
    "pos": "n.",
    "meaning": "沙漠",
    "example": "Some desert plants can store water for months."
  },
  {
    "topic": "自然地理",
    "term": "desolate",
    "pos": "adj.",
    "meaning": "荒凉的",
    "example": "The road crosses a desolate stretch of land."
  },
  {
    "topic": "自然地理",
    "term": "deteriorate",
    "pos": "v.",
    "meaning": "恶化",
    "example": "Air quality may deteriorate when traffic increases."
  },
  {
    "topic": "自然地理",
    "term": "disaster",
    "pos": "n.",
    "meaning": "灾难",
    "example": "The city revised its emergency plans after the disaster."
  },
  {
    "topic": "自然地理",
    "term": "horizon",
    "pos": "n.",
    "meaning": "地平线",
    "example": "Dark clouds appeared on the horizon."
  },
  {
    "topic": "自然地理",
    "term": "hydrogen",
    "pos": "n.",
    "meaning": "氢气",
    "example": "The team tested a bus powered by hydrogen."
  },
  {
    "topic": "自然地理",
    "term": "hydrosphere",
    "pos": "n.",
    "meaning": "水圈",
    "example": "Lakes and oceans are both part of the hydrosphere."
  },
  {
    "topic": "自然地理",
    "term": "latitude",
    "pos": "n.",
    "meaning": "纬度",
    "example": "The two cities are at roughly the same latitude."
  },
  {
    "topic": "自然地理",
    "term": "lithosphere",
    "pos": "n.",
    "meaning": "岩石圈",
    "example": "Heat from below can affect the movement of the lithosphere."
  },
  {
    "topic": "自然地理",
    "term": "longitude",
    "pos": "n.",
    "meaning": "经度",
    "example": "The map lists the longitude of each research station."
  },
  {
    "topic": "自然地理",
    "term": "mantle",
    "pos": "n.",
    "meaning": "地幔；覆盖层",
    "example": "The mantle lies between the crust and the core."
  },
  {
    "topic": "自然地理",
    "term": "oxide",
    "pos": "n.",
    "meaning": "氧化物",
    "example": "A thin layer of oxide formed on the metal."
  },
  {
    "topic": "自然地理",
    "term": "oxygen",
    "pos": "n.",
    "meaning": "氧气",
    "example": "The patient needed extra oxygen during the flight."
  },
  {
    "topic": "植物研究",
    "term": "conservation",
    "pos": "n.",
    "meaning": "保护；保育",
    "example": "The project supports the conservation of native plants."
  },
  {
    "topic": "植物研究",
    "term": "cultivate",
    "pos": "v.",
    "meaning": "种植；培养",
    "example": "Villagers cultivate herbs on the lower slopes."
  },
  {
    "topic": "植物研究",
    "term": "decay",
    "pos": "v.",
    "meaning": "腐烂；衰败",
    "example": "Leaves decay more slowly in cold weather."
  },
  {
    "topic": "植物研究",
    "term": "decompose",
    "pos": "v.",
    "meaning": "分解；腐烂",
    "example": "Food scraps decompose in a well-managed compost pile."
  },
  {
    "topic": "动物保护",
    "term": "crawl",
    "pos": "v.",
    "meaning": "爬行",
    "example": "The tiny insects crawl beneath the bark."
  },
  {
    "topic": "动物保护",
    "term": "creature",
    "pos": "n.",
    "meaning": "生物；动物",
    "example": "The creature hides among the rocks during the day."
  },
  {
    "topic": "动物保护",
    "term": "cricket",
    "pos": "n.",
    "meaning": "蟋蟀",
    "example": "A cricket was chirping under the garden bench."
  },
  {
    "topic": "动物保护",
    "term": "crow",
    "pos": "n.",
    "meaning": "乌鸦",
    "example": "A crow landed on the fence near the feeder."
  },
  {
    "topic": "动物保护",
    "term": "cub",
    "pos": "n.",
    "meaning": "幼兽",
    "example": "The cub followed its mother through the grass."
  },
  {
    "topic": "动物保护",
    "term": "curl",
    "pos": "v.",
    "meaning": "蜷曲；卷起",
    "example": "The animal can curl into a ball when threatened."
  },
  {
    "topic": "动物保护",
    "term": "defensive",
    "pos": "adj.",
    "meaning": "防御性的",
    "example": "The bird took a defensive position near its nest."
  },
  {
    "topic": "动物保护",
    "term": "demonstrate",
    "pos": "v.",
    "meaning": "演示；证明",
    "example": "The teacher used a model to demonstrate how the valve works."
  },
  {
    "topic": "动物保护",
    "term": "descendant",
    "pos": "n.",
    "meaning": "后代",
    "example": "This breed is a descendant of an older mountain dog."
  },
  {
    "topic": "太空探索",
    "term": "collision",
    "pos": "n.",
    "meaning": "碰撞",
    "example": "A collision between two objects can produce fragments."
  },
  {
    "topic": "太空探索",
    "term": "comet",
    "pos": "n.",
    "meaning": "彗星",
    "example": "The comet was visible shortly before sunrise."
  },
  {
    "topic": "太空探索",
    "term": "compound",
    "pos": "n.",
    "meaning": "化合物",
    "example": "The instrument detected an unusual compound in the sample."
  },
  {
    "topic": "太空探索",
    "term": "cosmos",
    "pos": "n.",
    "meaning": "宇宙",
    "example": "The exhibition explores our changing view of the cosmos."
  },
  {
    "topic": "太空探索",
    "term": "crater",
    "pos": "n.",
    "meaning": "陨石坑；火山口",
    "example": "The probe sent back detailed images of the crater."
  },
  {
    "topic": "学校教育",
    "term": "comprehend",
    "pos": "v.",
    "meaning": "理解",
    "example": "Diagrams helped the class comprehend the new concept."
  },
  {
    "topic": "学校教育",
    "term": "compulsory",
    "pos": "adj.",
    "meaning": "强制的；必修的",
    "example": "The laboratory course is compulsory for first-year students."
  },
  {
    "topic": "学校教育",
    "term": "controversial",
    "pos": "adj.",
    "meaning": "有争议的",
    "example": "The new grading system proved controversial among parents."
  },
  {
    "topic": "学校教育",
    "term": "cram",
    "pos": "v.",
    "meaning": "临时突击学习",
    "example": "Some students cram for exams instead of reviewing each week."
  },
  {
    "topic": "学校教育",
    "term": "curriculum",
    "pos": "n.",
    "meaning": "课程体系",
    "example": "The school added coding to its curriculum."
  },
  {
    "topic": "学校教育",
    "term": "data",
    "pos": "n.",
    "meaning": "数据",
    "example": "Students compared data from two different experiments."
  },
  {
    "topic": "学校教育",
    "term": "deadline",
    "pos": "n.",
    "meaning": "截止日期",
    "example": "We finished the report two days before the deadline."
  },
  {
    "topic": "学校教育",
    "term": "deduce",
    "pos": "v.",
    "meaning": "推断",
    "example": "From the results, students can deduce which material absorbs more heat."
  },
  {
    "topic": "科技发明",
    "term": "compress",
    "pos": "v.",
    "meaning": "压缩",
    "example": "The software can compress large files in seconds."
  },
  {
    "topic": "科技发明",
    "term": "compute",
    "pos": "v.",
    "meaning": "计算",
    "example": "The program can compute the average temperature for each month."
  },
  {
    "topic": "科技发明",
    "term": "concentrate",
    "pos": "v.",
    "meaning": "集中注意力",
    "example": "I concentrate better when I leave my phone outside the room."
  },
  {
    "topic": "科技发明",
    "term": "contingency",
    "pos": "n.",
    "meaning": "意外情况；可能事件",
    "example": "The team prepared for a contingency such as a power cut."
  },
  {
    "topic": "科技发明",
    "term": "convert",
    "pos": "v.",
    "meaning": "转换",
    "example": "The panels convert sunlight into electricity."
  },
  {
    "topic": "科技发明",
    "term": "correct",
    "pos": "v.",
    "meaning": "纠正",
    "example": "A software update can correct the timing error."
  },
  {
    "topic": "科技发明",
    "term": "device",
    "pos": "n.",
    "meaning": "装置；设备",
    "example": "The device warns drivers when the battery is low."
  },
  {
    "topic": "文化历史",
    "term": "convention",
    "pos": "n.",
    "meaning": "惯例；规范",
    "example": "The artist challenged the convention of painting on canvas."
  },
  {
    "topic": "文化历史",
    "term": "culture",
    "pos": "n.",
    "meaning": "文化",
    "example": "The museum explains how trade shaped the city's culture."
  },
  {
    "topic": "文化历史",
    "term": "custom",
    "pos": "n.",
    "meaning": "习俗",
    "example": "It is a local custom to share food with new neighbors."
  },
  {
    "topic": "语言演化",
    "term": "communicate",
    "pos": "v.",
    "meaning": "交流；传达",
    "example": "People communicate in different ways depending on the setting."
  },
  {
    "topic": "语言演化",
    "term": "compile",
    "pos": "v.",
    "meaning": "汇编；整理",
    "example": "Researchers compile examples of regional speech."
  },
  {
    "topic": "语言演化",
    "term": "conjunction",
    "pos": "n.",
    "meaning": "连词",
    "example": "The conjunction connects two ideas in the sentence."
  },
  {
    "topic": "语言演化",
    "term": "consonant",
    "pos": "n.",
    "meaning": "辅音",
    "example": "The final consonant is difficult for some learners to pronounce."
  },
  {
    "topic": "娱乐运动",
    "term": "comedy",
    "pos": "n.",
    "meaning": "喜剧",
    "example": "We watched a comedy after dinner."
  },
  {
    "topic": "娱乐运动",
    "term": "competition",
    "pos": "n.",
    "meaning": "竞赛；竞争",
    "example": "The rowing competition begins early on Sunday."
  },
  {
    "topic": "娱乐运动",
    "term": "concert",
    "pos": "n.",
    "meaning": "音乐会",
    "example": "The village held an outdoor concert in the summer."
  },
  {
    "topic": "娱乐运动",
    "term": "consensus",
    "pos": "n.",
    "meaning": "共识",
    "example": "The committee reached a consensus about the exhibition."
  },
  {
    "topic": "娱乐运动",
    "term": "cycling",
    "pos": "n.",
    "meaning": "骑自行车运动",
    "example": "Cycling is a popular way to explore the coastline."
  },
  {
    "topic": "物品材料",
    "term": "cord",
    "pos": "n.",
    "meaning": "绳；电线",
    "example": "Check the power cord before you plug in the machine."
  },
  {
    "topic": "物品材料",
    "term": "cotton",
    "pos": "n.",
    "meaning": "棉；棉布",
    "example": "The bag is made from thick cotton."
  },
  {
    "topic": "物品材料",
    "term": "crystal",
    "pos": "n.",
    "meaning": "晶体",
    "example": "The salt formed a small crystal as the water evaporated."
  },
  {
    "topic": "时尚潮流",
    "term": "sleeve",
    "pos": "n.",
    "meaning": "袖子",
    "example": "She rolled up her sleeve before washing the dishes."
  },
  {
    "topic": "时尚潮流",
    "term": "textile",
    "pos": "n.",
    "meaning": "纺织品",
    "example": "The museum displays a textile woven by local artisans."
  },
  {
    "topic": "时尚潮流",
    "term": "trend",
    "pos": "n.",
    "meaning": "趋势；潮流",
    "example": "The report tracks a growing trend toward second-hand clothing."
  },
  {
    "topic": "时尚潮流",
    "term": "uniform",
    "pos": "n.",
    "meaning": "制服",
    "example": "Every player wore the same uniform during the match."
  },
  {
    "topic": "时尚潮流",
    "term": "velvet",
    "pos": "n.",
    "meaning": "天鹅绒",
    "example": "The jacket was made from dark green velvet."
  },
  {
    "topic": "饮食健康",
    "term": "core",
    "pos": "n.",
    "meaning": "核心；地核",
    "example": "The core of the planet remains extremely hot."
  },
  {
    "topic": "饮食健康",
    "term": "crop",
    "pos": "n.",
    "meaning": "作物",
    "example": "The main crop in the area is rice."
  },
  {
    "topic": "饮食健康",
    "term": "cucumber",
    "pos": "n.",
    "meaning": "黄瓜",
    "example": "Slice the cucumber thinly before adding it to the salad."
  },
  {
    "topic": "饮食健康",
    "term": "cuisine",
    "pos": "n.",
    "meaning": "烹饪风格；菜肴",
    "example": "The region's cuisine makes good use of fresh herbs."
  },
  {
    "topic": "饮食健康",
    "term": "dairy",
    "pos": "adj.",
    "meaning": "奶制品的",
    "example": "The store has a separate section for dairy products."
  },
  {
    "topic": "建筑场所",
    "term": "concrete",
    "pos": "n.",
    "meaning": "混凝土",
    "example": "They used concrete for the base of the bridge."
  },
  {
    "topic": "建筑场所",
    "term": "construct",
    "pos": "v.",
    "meaning": "建造",
    "example": "The city plans to construct a footbridge over the road."
  },
  {
    "topic": "建筑场所",
    "term": "corridor",
    "pos": "n.",
    "meaning": "走廊",
    "example": "The classroom is at the end of the corridor."
  },
  {
    "topic": "建筑场所",
    "term": "dam",
    "pos": "n.",
    "meaning": "水坝",
    "example": "The dam stores water for nearby farms."
  },
  {
    "topic": "交通旅行",
    "term": "convey",
    "pos": "v.",
    "meaning": "运输；传达",
    "example": "The lift can convey supplies to the upper floors."
  },
  {
    "topic": "交通旅行",
    "term": "delay",
    "pos": "n.",
    "meaning": "延误",
    "example": "Heavy rain caused a delay at the airport."
  },
  {
    "topic": "交通旅行",
    "term": "depart",
    "pos": "v.",
    "meaning": "出发；离开",
    "example": "The next train will depart from platform four."
  },
  {
    "topic": "交通旅行",
    "term": "destination",
    "pos": "n.",
    "meaning": "目的地",
    "example": "The final destination is a small town near the border."
  },
  {
    "topic": "国家政府",
    "term": "reform",
    "pos": "n.",
    "meaning": "改革",
    "example": "The proposed reform would change how local elections are run."
  },
  {
    "topic": "国家政府",
    "term": "republic",
    "pos": "n.",
    "meaning": "共和国",
    "example": "The country became a republic after the monarchy ended."
  },
  {
    "topic": "国家政府",
    "term": "senate",
    "pos": "n.",
    "meaning": "参议院",
    "example": "The senate debated the proposed law for several hours."
  },
  {
    "topic": "国家政府",
    "term": "vote",
    "pos": "v.",
    "meaning": "投票",
    "example": "Residents will vote on the plan next month."
  },
  {
    "topic": "国家政府",
    "term": "welfare",
    "pos": "n.",
    "meaning": "福利；福祉",
    "example": "The policy aims to improve the welfare of low-income families."
  },
  {
    "topic": "社会经济",
    "term": "consume",
    "pos": "v.",
    "meaning": "消耗；消费",
    "example": "Older appliances often consume more electricity."
  },
  {
    "topic": "社会经济",
    "term": "copper",
    "pos": "n.",
    "meaning": "铜",
    "example": "The cables contain copper because it conducts electricity well."
  },
  {
    "topic": "社会经济",
    "term": "coupon",
    "pos": "n.",
    "meaning": "优惠券",
    "example": "She used a coupon to buy the book at a discount."
  },
  {
    "topic": "社会经济",
    "term": "currency",
    "pos": "n.",
    "meaning": "货币",
    "example": "The airport has a desk where you can exchange currency."
  },
  {
    "topic": "社会经济",
    "term": "deflation",
    "pos": "n.",
    "meaning": "通货紧缩",
    "example": "Persistent deflation may encourage shoppers to postpone purchases."
  },
  {
    "topic": "社会经济",
    "term": "deposit",
    "pos": "n.",
    "meaning": "存款；押金",
    "example": "The landlord asked for a deposit before handing over the keys."
  },
  {
    "topic": "法律法规",
    "term": "copyright",
    "pos": "n.",
    "meaning": "版权",
    "example": "The author kept the copyright to her photographs."
  },
  {
    "topic": "法律法规",
    "term": "counsel",
    "pos": "n.",
    "meaning": "法律顾问；律师",
    "example": "The defendant spoke to legal counsel before the hearing."
  },
  {
    "topic": "法律法规",
    "term": "crime",
    "pos": "n.",
    "meaning": "犯罪；罪行",
    "example": "The law sets out different penalties for each crime."
  },
  {
    "topic": "沙场争锋",
    "term": "compromise",
    "pos": "n.",
    "meaning": "妥协；折中方案",
    "example": "Both sides accepted a compromise to end the dispute."
  },
  {
    "topic": "沙场争锋",
    "term": "conflict",
    "pos": "n.",
    "meaning": "冲突",
    "example": "The conflict forced several families to leave the town."
  },
  {
    "topic": "沙场争锋",
    "term": "contest",
    "pos": "n.",
    "meaning": "竞赛",
    "example": "Our team entered a photography contest."
  },
  {
    "topic": "沙场争锋",
    "term": "defend",
    "pos": "v.",
    "meaning": "防守；保卫",
    "example": "The soldiers were ordered to defend the bridge."
  },
  {
    "topic": "沙场争锋",
    "term": "deploy",
    "pos": "v.",
    "meaning": "部署",
    "example": "The commander decided to deploy troops near the crossing."
  },
  {
    "topic": "社会角色",
    "term": "commuter",
    "pos": "n.",
    "meaning": "通勤者",
    "example": "A commuter can save time by taking the express train."
  },
  {
    "topic": "社会角色",
    "term": "consultant",
    "pos": "n.",
    "meaning": "顾问",
    "example": "A consultant helped the team improve its hiring process."
  },
  {
    "topic": "社会角色",
    "term": "counsellor",
    "pos": "n.",
    "meaning": "咨询师；辅导员",
    "example": "A school counsellor helped her decide which course to take."
  },
  {
    "topic": "社会角色",
    "term": "cousin",
    "pos": "n.",
    "meaning": "堂表兄弟姐妹",
    "example": "My cousin taught me how to bake bread."
  },
  {
    "topic": "社会角色",
    "term": "customer",
    "pos": "n.",
    "meaning": "顾客",
    "example": "The customer asked for a receipt."
  },
  {
    "topic": "行为动作",
    "term": "contemplate",
    "pos": "v.",
    "meaning": "深思；考虑",
    "example": "She took a walk to contemplate her next step."
  },
  {
    "topic": "行为动作",
    "term": "convict",
    "pos": "v.",
    "meaning": "判定有罪",
    "example": "The court needs enough evidence to convict a suspect."
  },
  {
    "topic": "行为动作",
    "term": "convince",
    "pos": "v.",
    "meaning": "说服；使相信",
    "example": "The evidence helped convince the group to change its plan."
  },
  {
    "topic": "身心健康",
    "term": "curative",
    "pos": "adj.",
    "meaning": "有疗效的",
    "example": "The study tested whether the treatment had a curative effect."
  },
  {
    "topic": "身心健康",
    "term": "cure",
    "pos": "n.",
    "meaning": "疗法；治愈方法",
    "example": "Researchers are still searching for a cure."
  },
  {
    "topic": "身心健康",
    "term": "dental",
    "pos": "adj.",
    "meaning": "牙齿的；牙科的",
    "example": "The clinic offers low-cost dental care."
  },
  {
    "topic": "身心健康",
    "term": "detriment",
    "pos": "n.",
    "meaning": "损害；不利影响",
    "example": "He worked late every night to the detriment of his health."
  },
  {
    "topic": "时间日期",
    "term": "consecutive",
    "pos": "adj.",
    "meaning": "连续的",
    "example": "It rained for three consecutive days."
  },
  {
    "topic": "时间日期",
    "term": "contemporary",
    "pos": "adj.",
    "meaning": "当代的",
    "example": "The project compares contemporary English with older texts."
  },
  {
    "topic": "时间日期",
    "term": "daily",
    "pos": "adj.",
    "meaning": "每日的",
    "example": "A daily walk helps her relax."
  }
];
