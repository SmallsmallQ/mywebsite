/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: 'favicon.svg', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '探索法律与人工智能的融合之路', // 主标题改为AI法学方向
  STARTER_HERO_TITLE_2: '关注科技法制建设与数字治理创新', // 副标题相应调整
  // 按钮修改
  STARTER_HERO_BUTTON_1_TEXT: '研究成果',
  STARTER_HERO_BUTTON_1_URL: '/research',
  STARTER_HERO_BUTTON_2_TEXT: '学术简历', 
  STARTER_HERO_BUTTON_2_URL: '/about',
  STARTER_HERO_BUTTON_2_ICON: '', // 可以移除github图标

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image.webp', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 移除登录注册按钮
  STARTER_NAV_BUTTON_1_TEXT: '',
  STARTER_NAV_BUTTON_1_URL: '',
  STARTER_NAV_BUTTON_2_TEXT: '',
  STARTER_NAV_BUTTON_2_URL: '',

  // 特性区块修改
  STARTER_FEATURE_ENABLE: true,
  STARTER_FEATURE_TITLE: '研究领域',
  STARTER_FEATURE_TEXT_1: '交叉学科研究与创新实践',
  STARTER_FEATURE_TEXT_2: '致力于探索法律与科技融合发展的创新路径，推动法律科技建设与数字化治理',

  STARTER_FEATURE_1_TITLE_1: '人工智能法学', // 特性1
  STARTER_FEATURE_1_TEXT_1: '研究AI发展中的法律规制与伦理治理', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: '/ai-law', // 特性1

  STARTER_FEATURE_2_TITLE_1: '数字法治', // 特性2
  STARTER_FEATURE_2_TEXT_1: '探索数字化转型中的法律问题与制度创新', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL: '/digital-law', // 特性2

  STARTER_FEATURE_3_TITLE_1: '科技法务', // 特性3
  STARTER_FEATURE_3_TEXT_1: '聚焦新兴科技应用的法律风险防控', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '/tech-law', // 特性3

  STARTER_FEATURE_4_TITLE_1: '学术成果', // 特性4
  STARTER_FEATURE_4_TEXT_1: '发表论文与研究项目展示', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: '/publications', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '个人简介',
  STARTER_ABOUT_TEXT:
    '西安交通大学法学院在读学生，主要研究方向为人工智能法学与科技法。致力于探索法律与新兴科技的融合发展，特别关注AI治理、数据合规等领域。',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: '/about',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '研究领域',
  STARTER_ABOUT_TIPS_2: 'AI法学',
  STARTER_ABOUT_TIPS_3: '科技法律',

  // 首页价格区块 - 注释掉不相关的商业内容
  STARTER_PRICING_ENABLE: false, // 价格区块关闭
  /* 
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（NotionNext免费开源，这里仅演示产品订阅付费功能，请勿下单购买！）',

  STARTER_PRICING_1_TITLE: '入门版',
  STARTER_PRICING_1_PRICE: '19.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '所有的主题,免费更新,帮助手册', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '基础版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含入门版,项目源码,内部社群,技术咨询,SEO优化', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '高级版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含基础版,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',
  */

  // 首页用户测评区块 - 关闭不相关的用户反馈
  STARTER_TESTIMONIALS_ENABLE: false, // 测评区块关闭
  /*
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '数千位站长选择用NotionNext搭建他们的网站,通过帮助手册、交流社群以及技术咨询，大家成功上线了自己的网站',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    // ...原有用户反馈项
  ],
  */

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '研究方法',
  STARTER_FAQ_TEXT_1: '数字时代的法学研究',
  STARTER_FAQ_TEXT_2: '我的研究方法与学术兴趣',

  STARTER_FAQ_1_QUESTION: '如何看待人工智能对法律实践的影响？',
  STARTER_FAQ_1_ANSWER:
    '人工智能正在重塑法律实践的各个环节，从法律检索、文本分析到案例预测。我的研究聚焦于AI应用对法律职业的影响，以及如何构建合理的法律监管框架以平衡创新与风险。',

  STARTER_FAQ_2_QUESTION: '数字化转型对法律体系提出了哪些挑战？',
  STARTER_FAQ_2_ANSWER:
    '数字化转型对传统法律概念和制度形成挑战，包括数据主权、算法透明度、平台责任等问题。我的研究探索如何通过法律创新应对这些挑战，建立更加适应数字经济的法律框架。',

  STARTER_FAQ_3_QUESTION: '科技法学的跨学科特点是什么？',
  STARTER_FAQ_3_ANSWER:
    '科技法学需要法学与计算机科学、伦理学等多学科交叉研究。我致力于融合不同学科的方法和视角，构建更加全面的科技法学研究体系。',

  STARTER_FAQ_4_QUESTION: '如何平衡科技创新与法律规制？',
  STARTER_FAQ_4_ANSWER:
    '科技创新与法律规制之间存在天然张力。我的研究旨在探索如何设计适应性强的法律框架，既能保护公共利益和个人权利，又能为创新提供空间和支持。',

  // 团队成员区块 - 关闭不相关的团队展示
  STARTER_TEAM_ENABLE: false, // 团队成员区块关闭
  /*
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的开发者团队',
  STARTER_TEAM_TEXT_2:
    'NotionNext 由众多开源技术爱好者们共同合作完成，感谢每一位<a className="underline" href="https://github.com/tangly1024/NotionNext/graphs/contributors">贡献者</a>',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    // ...原有团队成员项
  ],
  */

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '最新研究',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '学术动态',
  STARTER_BLOG_TEXT_2:
    '分享我在人工智能法学、科技法律与数字治理领域的最新研究成果与思考',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系方式',
  STARTER_CONTACT_TEXT: '欢迎学术交流与合作',
  STARTER_CONTACT_LOCATION_TITLE: '所在地',
  STARTER_CONTACT_LOCATION_TEXT: '西安交通大学法学院',
  STARTER_CONTACT_EMAIL_TITLE: '邮箱',
  STARTER_CONTACT_EMAIL_TEXT: 'gongyunbo@stu.xjtu.edu.cn',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/yfctc7', // 基于NoteForm创建，将留言数据存在Notion中

  // 合作伙伴的图标 - 关闭不相关内容
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  /*
  STARTER_BRANDS: [
    // ...原有品牌展示项
  ],
  */

  STARTER_FOOTER_SLOGAN: '致力于法律与科技的融合发展',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '研究领域',
      LINK_GROUP: [
        { TITLE: '人工智能法学', URL: '/ai-law' },
        { TITLE: '数字法治', URL: '/digital-law' },
        { TITLE: '科技法务', URL: '/tech-law' },
        { TITLE: '学术成果', URL: '/publications' }
      ]
    },
    {
      TITLE: '关于我',
      LINK_GROUP: [
        { TITLE: '个人简介', URL: '/about' },
        { TITLE: '学术简历', URL: '/cv' },
        { TITLE: '研究项目', URL: '/projects' },
        { TITLE: '学术资源', URL: '/resources' }
      ]
    },
    {
      TITLE: '联系方式',
      LINK_GROUP: [
        { TITLE: '学术邮箱', URL: 'mailto:gongyunbo@stu.xjtu.edu.cn' },
        { TITLE: '学术主页', URL: 'https://smallq.top' }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '探索更多',
  STARTER_CTA_TITLE_2: '学术研究',
  STARTER_CTA_DESCRIPTION:
    '了解我在人工智能法学与科技法律领域的研究成果与学术思考',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL: '/research',
  STARTER_CTA_BUTTON_TEXT: '查看研究成果',

  STARTER_POST_REDIRECT_ENABLE: false, // 关闭重定向
  // STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅
}
export default CONFIG
