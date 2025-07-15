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
export { articles, voice, magazine }