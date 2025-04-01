/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: 'https://i.postimg.cc/zvQ41bSP/logo.png', // 使用你提供的logo
  STARTER_LOGO_WHITE: 'https://i.postimg.cc/zvQ41bSP/logo.png', // 透明底浅色logo

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '小Q的个人网站', // 主标题
  STARTER_HERO_TITLE_2: '分享法律笔记，记录生活点滴，展示项目成果', // 副标题
  // 英雄区两个按钮
  STARTER_HERO_BUTTON_1_TEXT: '法律笔记', // 第一个按钮
  STARTER_HERO_BUTTON_1_URL: '/legal-study', // 链接到法律笔记
  STARTER_HERO_BUTTON_2_TEXT: '关于我', // 第二个按钮
  STARTER_HERO_BUTTON_2_URL: '/about', // 链接到关于我
  STARTER_HERO_BUTTON_2_ICON: '', // 不使用图标

  // 英雄区配图
  STARTER_HERO_PREVIEW_IMAGE: 'https://theme-hope-assets.vuejs.press/bg/6-light.svg', // 背景图片
  STARTER_HERO_BANNER_IMAGE: '', // 不使用全宽图

  // 导航按钮 - 不使用
  //STARTER_NAV_BUTTON_1_TEXT: '',
  //STARTER_NAV_BUTTON_1_URL: '',
  //STARTER_NAV_BUTTON_2_TEXT: '',
  //STARTER_NAV_BUTTON_2_URL: '',

  // 特性区块 - 研究领域
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '研究领域', // 标题
  STARTER_FEATURE_TEXT_1: '法律与科技交叉研究', // 概述
  STARTER_FEATURE_TEXT_2: '致力于推动法律研究的数字化转型，探索法律与人工智能的融合之路', // 详细说明

  STARTER_FEATURE_1_TITLE_1: '法律智能', // 特性1
  STARTER_FEATURE_1_TEXT_1: '研究人工智能在法律领域的应用与伦理规范', // 特性1说明
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1按钮
  STARTER_FEATURE_1_BUTTON_URL: '/legal-study/legal-ai', // 特性1链接

  STARTER_FEATURE_2_TITLE_1: '婚姻法研究', // 特性2
  STARTER_FEATURE_2_TEXT_1: '婚姻法律风险评估与家事法律实践', // 特性2说明
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2按钮
  STARTER_FEATURE_2_BUTTON_URL: '/assessment', // 特性2链接

  STARTER_FEATURE_3_TITLE_1: '法律数据分析', // 特性3
  STARTER_FEATURE_3_TEXT_1: '运用Python进行法律文本与案例数据分析', // 特性3说明
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3按钮
  STARTER_FEATURE_3_BUTTON_URL: '/legal-study/model', // 特性3链接

  STARTER_FEATURE_4_TITLE_1: '学术成果', // 特性4
  STARTER_FEATURE_4_TEXT_1: '竞赛项目与论文成果展示', // 特性4说明
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4按钮
  STARTER_FEATURE_4_BUTTON_URL: '/project-demo', // 特性4链接

  // 首页ABOUT区块 - 个人简介
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '个人简介',
  STARTER_ABOUT_TEXT:
    '我是一名兼具法律专业素养与技术实践能力的复合型人才，主攻法律与人工智能的交叉领域。作为一名就读于西安交通大学法学院的法学（复合）专业学生，我致力于推动法律研究的数字化转型，探索法律与科技的创新融合。<br/><br/>2023-2024年度国家奖学金获得者，综合成绩位居班级前列。',
  STARTER_ABOUT_BUTTON_TEXT: '完整简历',
  STARTER_ABOUT_BUTTON_URL: '/about',
  STARTER_ABOUT_IMAGE_1: 'https://theme-hope-assets.vuejs.press/bg/2-light.svg',
  STARTER_ABOUT_IMAGE_2: 'https://theme-hope-assets.vuejs.press/bg/3-light.svg',
  STARTER_ABOUT_TIPS_1: '法学复合',
  STARTER_ABOUT_TIPS_2: '科技法律',
  STARTER_ABOUT_TIPS_3: '创新实践',

  // 价格区块 - 关闭
  STARTER_PRICING_ENABLE: false,

  // 用户评价区块 - 改为项目展示
  STARTER_TESTIMONIALS_ENABLE: true,
  STARTER_TESTIMONIALS_TITLE: '项目展示',
  STARTER_TESTIMONIALS_TEXT_1: '我的技术与法律实践',
  STARTER_TESTIMONIALS_TEXT_2: '整合法律专业知识与技术能力，打造实用的法律科技项目',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg',
  
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '婚姻风险评估系统基于对婚姻法与家事法的深入研究，结合AI技术，为用户提供个性化的婚姻关系法律风险评估报告',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://i.postimg.cc/zvQ41bSP/logo.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '婚姻风险评估',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '法律AI应用',
      STARTER_TESTIMONIALS_ITEM_URL: '/assessment'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'Python法律数据分析工具包，用于处理和分析法律文本、案例数据，并通过可视化展示分析结果',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://i.postimg.cc/zvQ41bSP/logo.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '法律数据分析',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Python项目',
      STARTER_TESTIMONIALS_ITEM_URL: '/legal-study/model'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '基于Vue框架开发的能源数据可视化项目，荣获中国大学生计算机设计大赛全国二等奖',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://i.postimg.cc/zvQ41bSP/logo.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '腾飞杯作品',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '获奖项目',
      STARTER_TESTIMONIALS_ITEM_URL: '/project-demo/energy'
    }
  ],
  
  // FAQ区块 - 修改为研究方法
  STARTER_FAQ_ENABLE: true,
  STARTER_FAQ_TITLE: '研究方法',
  STARTER_FAQ_TEXT_1: '跨学科视野与创新思维',
  STARTER_FAQ_TEXT_2: '结合法学理论与技术实践，探索法律研究的新方向',

  STARTER_FAQ_1_QUESTION: '如何看待法律与技术的融合？',
  STARTER_FAQ_1_ANSWER:
    '法律与技术的融合不仅是趋势，更是必然。我的研究着眼于将人工智能、大数据分析等技术手段应用于法律实践，提高法律服务的效率和精准度，同时关注技术发展带来的法律和伦理挑战。',

  STARTER_FAQ_2_QUESTION: '婚姻法研究的意义是什么？',
  STARTER_FAQ_2_ANSWER:
    '婚姻法研究不仅关乎个人幸福，更关系社会稳定。我的婚姻风险评估系统旨在通过技术手段帮助人们识别婚姻关系中的法律风险点，提供预防性法律建议，促进和谐家庭关系的构建。',

  STARTER_FAQ_3_QUESTION: '如何进行法律数据分析？',
  STARTER_FAQ_3_ANSWER:
    '法律数据分析结合了自然语言处理、机器学习等技术，对法律文本、案例数据进行结构化处理和量化分析。通过Python等工具，可以发现法律适用的规律和趋势，为法律研究和决策提供数据支持。',

  STARTER_FAQ_4_QUESTION: '法律创新实践的方向？',
  STARTER_FAQ_4_ANSWER:
    '法律创新实践应当以社会需求为导向，以技术为手段，以法律为基础。我的研究和项目聚焦于婚姻家事、法律智能、法律教育等领域的实际问题，致力于开发具有实用价值的法律科技解决方案。',

  // 团队成员区块 - 关闭
  STARTER_TEAM_ENABLE: false,

  // 博客文章区块
  STARTER_BLOG_ENABLE: true,
  STARTER_BLOG_TITLE: '法律学习笔记',
  STARTER_BLOG_COUNT: 3,
  STARTER_BLOG_TEXT_1: '最新文章',
  STARTER_BLOG_TEXT_2:
    '分享我在民法学、法理学、法律科技等领域的学习笔记和研究心得',

  // 联系模块
  STARTER_CONTACT_ENABLE: true,
  STARTER_CONTACT_TITLE: '联系方式',
  STARTER_CONTACT_TEXT: '欢迎学术交流与合作',
  STARTER_CONTACT_LOCATION_TITLE: '所在地',
  STARTER_CONTACT_LOCATION_TEXT: '西安交通大学法学院',
  STARTER_CONTACT_EMAIL_TITLE: '邮箱',
  STARTER_CONTACT_EMAIL_TEXT: 'gongyunbo@stu.xjtu.edu.cn',
  
  // 合作伙伴部分 - 关闭
  STARTER_BRANDS_ENABLE: false,

  // 页脚部分
  STARTER_FOOTER_SLOGAN: '致力于法律与科技的创新融合',
  
  // 页脚菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '研究领域',
      LINK_GROUP: [
        { TITLE: '法律智能', URL: '/legal-study/legal-ai' },
        { TITLE: '婚姻法研究', URL: '/assessment' },
        { TITLE: '法律数据分析', URL: '/legal-study/model' },
        { TITLE: '学术成果', URL: '/project-demo' }
      ]
    },
    {
      TITLE: '生活分享',
      LINK_GROUP: [
        { TITLE: '旅行游记', URL: '/life-sharing/go-on-journey' },
        { TITLE: '技术文章', URL: '/tech' },
        { TITLE: '社会实践', URL: '/project-demo/social-practice' }
      ]
    },
    {
      TITLE: '关于我',
      LINK_GROUP: [
        { TITLE: '个人简介', URL: '/about' },
        { TITLE: '教育经历', URL: '/about#教育经历' },
        { TITLE: '竞赛成果', URL: '/about#竞赛成果' },
        { TITLE: '技术项目', URL: '/about#技术项目' }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  // 页脚隐私政策等
  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',
  
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legal-notice',
  
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',
  
  // 404页面
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',
  
  // 底部行动呼吁
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '想了解更多？',
  STARTER_CTA_TITLE_2: '立即探索',
  STARTER_CTA_DESCRIPTION:
    '探索我的婚姻风险评估系统，查看法律学习笔记，或了解我的项目与研究',
  STARTER_CTA_BUTTON: true,
  STARTER_CTA_BUTTON_URL: '/assessment/start',
  STARTER_CTA_BUTTON_TEXT: '婚姻风险评估',

  // 关闭重定向
  STARTER_POST_REDIRECT_ENABLE: false,
  STARTER_NEWSLETTER: false
}

export default CONFIG
