// NAV 的子選單
import coffee from '@/assets/coffee.jpg'
import yms from '@/assets/YMS.jpg'
import omar from '@/assets/OMAR.jpg'
import art from '@/assets/art.jpg'

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

export { articles, voice, magazine, carouselData }