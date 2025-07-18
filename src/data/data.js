// NAV 的子選單
import coffee from '@/assets/coffee.jpg'
import yms from '@/assets/YMS.jpg'
import omar from '@/assets/OMAR.jpg'
import art from '@/assets/art.jpg'
import Zombie from '@/assets/Zombie.jpg'
import Anderson from '@/assets/Anderson.jpg'
import tokyoMelody from '@/assets/tokyoMelody.jpg'
import TPE101 from '@/assets/101.jpg'
import TPE from '@/assets/TPE.jpg'
import Hotel from '@/assets/Hotel.jpg'
import bar from '@/assets/bar.jpg'
import architecture from '@/assets/architecture.jpg'
import dogMoney from '@/assets/dogMoney.jpeg'
import cow from '@/assets/cow.jpg'
import earthquake from '@/assets/earthquake.jpg'
import culture from '@/assets/culture.jpg'





const articles = [
  {
    title: '最新文章 Latest Articles',
    url: '/latest',
  },
  {
    title: '商業 Business',
    url: '/latest',
  },
  {
    title: '風格 Style',
    children: [
      {
        title: '時尚 Fashion',
        url: '/latest',
      },
      {
        title: '賞車 Cars',
        url: '/style/cars',
      },
      {
        title: '居家 Home Tours',
        url: '/style/home',
      },
    ],
  },
  {
    title: '文化 Culture',
    children: [
      {
        title: '藝術 Art',
        url: '/culture/art',
      },
      {
        title: '攝影 Photography',
        url: '/culture/photography',
      },
      {
        title: '音樂 Music',
        url: '/culture/music',
      },
    ],
  },
  {
    title: '娛樂 Entertainment',
    children: [
      {
        title: '電影 Movie',
        url: '/entertainment/movie',
      },
      {
        title: '影劇 TV Series',
        url: '/entertainment/tv',
      },
      {
        title: '動漫 Comic & Anime',
        url: '/entertainment/anime',
      },
    ],
  },
  {
    title: '飲食 Dining',
    children: [
      {
        title: '美食 Food',
        url: '/dining/food',
      },
      {
        title: '醇酒 Wine & Spirits',
        url: '/dining/wine',
      },
    ],
  },
  {
    title: '行旅 Journey',
    children: [
      {
        title: 'My Town',
        url: '/journey/my-town',
      },
      {
        title: '旅宿 Hotels',
        url: '/journey/hotels',
      },
    ],
  },
];

const voice = [
  {
    title: '最新集數',
    url: '/latest',
  },
  {
    title: '節目列表',
    url: '/latest',
  },
];

const magazine = [
  {
    title: '各期內容',
    url: '/latest',
  },
  {
    title: '訂閱一年六期',
    url: '/latest',
  },
  {
    title: '訂閱兩年十二期',
    url: '/latest',
  },
];

// 輪播圖
const carouselData = [
  {
    tag:'飲食',
    title:'台北「髒髒咖啡」去哪喝？推薦5間職人級咖啡廳：SunDay酉日、GoodMan、 KiOSK、D23、KITE，享受冰火交融的極致',
    img: coffee,
    url: '/latest',
  },
  {
    tag:'風格',
    title:'陽明山上的美國中世紀現代之夢：YMS by onefifteen 打造新美學聖地，五大空間定義理想生活',
    img: yms,
    url: '/latest',
  },
  {
    tag:'醇酒',
    title:'OMAR威士忌中的台灣風土：液態的島嶼記憶',
    img: omar,
    url: '/latest',
  },
  {
    tag:'藝術',
    title:'2025台北藝術之夏：為什麼選在此刻登場？觀展指南完整解析',
    img: art,
    url: '/latest',
  }
]

// Verse 分類推薦
const verseList = [
  { mainTitle:'電影',
    enMainTitle:'Entertainment',
    children:
    [
      {
        tag: '電影', 
        img: Zombie, 
        title: '喪屍神作續集《28年毀滅倒數》即將上映，恐怖沉浸式體驗展搶先登台', 
        desc: '話題性末日電影《28 年毀滅倒數》將在台登場，由電影延伸出的沉浸體驗展，搶先在台北西門町開幕。', 
        url: 'http:'
      },
      {
        tag: '電影', 
        img: Anderson, 
        title: '為什麼我們開始不愛魏斯安德森？一個美學疲勞時代的哀傷寓言', 
        url: 'http:'

      },
      {
        tag: ['人物','電影'], 
        img: tokyoMelody, 
        title: '坂本龍一的東京旋律：永遠青春，永遠在聲音中不斷重生', 
        url: 'http:'
      },
    ] 
  },
  { mainTitle:'行旅',
    enMainTitle:'Journey',
    children:
    [
      {
        tag: ['地方','行旅'], 
        img: Hotel, 
        title: '礁溪溫泉旅宿／冠翔泉旅：在野植花園中沐浴四季，樂享夏日療癒系之旅', 
        desc: '暑假親子遊樂何處去？礁溪從早期的純溫泉泡湯勝地，逐步發展為多元化的觀光區域，「冠翔泉旅」成功將 20 年老屋轉型為充滿綠意的新一代溫泉旅宿，為這座溫泉小鎮增添新風貌。', 
        url: 'http:'
      },

      {
        tag: '地方', 
        img: TPE101, 
        title: '光與影交織的城市日常／A City of Light and Shadow Woven into the Everyday', 
        url: 'http:'
      },
      {
        tag: '行旅', 
        img: TPE, 
        title: '臺北，一座與自然共生的城市／The Essence of a City Embraced by Nature', 
        url: 'http:'

      },

    ] 
  },
  { mainTitle:'商業',
    enMainTitle:'Business',
    children:
    [
      {
        tag: '商業', 
        img: bar, 
        title: '都市微醺學：解析10種台灣酒吧的創新行銷術！',
        desc: '台灣酒吧從主題設計、創意調酒到社群行銷，結合節慶與科技等手法，打造多元體驗，吸引消費者參與，提升品牌知名度與忠誠度。', 
        url: 'http:'
      },
      {
        tag: '商業', 
        img: architecture, 
        title: '嘉潤建設 × 峻勝建設—— 打造以人為本的全能建築，成為中和居民信賴的朋友', 
        url: 'http:'

      },
      {
        tag: '商業', 
        img: dogMoney, 
        title: '狗狗幣的崛起：當迷因變成黃金', 
        url: 'http:'
      },
    ] 
  },
  { mainTitle:'觀點',
    enMainTitle:'New Ideas',
    
    children:
    [
      {
        tag: '永續', 
        img: cow, 
        title: '鮮乳保衛戰！台灣乳業60年全紀錄：面對紐西蘭零關稅的2025關鍵年', 
        desc: '隨著 2025 年紐西蘭液態乳正式享有零關稅進口待遇，台灣乳業正面臨第四次重大挑戰。回顧過去 60 年間，台灣乳業如何歷經乳粉開放、冷凍牛肉衝擊、WTO 入會後自由貿易壓力等三次危機，每一次重創過後，都催生出新制度與品質升級。面對零關稅新局，政府自 2022 年起，透過調漲生乳價、推動養牛產業升級、新版鮮乳標章與進口乳標示政策，積極強化國產鮮乳的鮮度價值。自由貿易雖帶來競爭，但也為台灣乳業再次轉型升級鋪下契機。', 
        url: 'http:'
      },
      {
        tag: '觀點', 
        img: earthquake, 
        title: '7月5日日本大地震真的會發生嗎？漫畫家龍樹諒的夢境與預言分析',
        url: 'http:'
      },
      {
        tag: '觀點', 
        img: culture, 
        title: '我們的「不完美日常」：從韓國爆紅「台灣感性」說出了什麼樣的台灣文化？', 
        url: 'http:'
        

      },

    ] 
  },

]
export { articles, voice, magazine, carouselData, verseList }