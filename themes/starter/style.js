/* eslint-disable react/no-unknown-property */

/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`

  /* 修改导航栏样式为更专业的外观 */
  #theme-starter .sticky{
    position: fixed;
    z-index: 20;
    background-color: rgb(255 255 255 / 0.9); /* 增加不透明度，更专业的外观 */
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  
  /* 深色模式下导航栏样式 - 使用更深的蓝色调 */
  :is(.dark #theme-starter .sticky){
    background-color: rgb(15 23 42 / 0.95); /* 深蓝色调，更适合学术网站 */
  }
  
  #theme-starter .sticky {
    -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  }
  
  #theme-starter .sticky .navbar-logo{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  /* 修改导航菜单颜色为更专业的深蓝色 */
  #theme-starter .sticky #navbarToggler span{
    --tw-bg-opacity: 1;
    background-color: rgb(30 41 59 / var(--tw-bg-opacity)); /* 深蓝色 */
  }
  
  :is(.dark #theme-starter .sticky #navbarToggler span){
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  
  /* 修改导航链接颜色 */
  #theme-starter .sticky #navbarCollapse li > a{
    --tw-text-opacity: 1;
    color: rgb(30 41 59 / var(--tw-text-opacity)); /* 深蓝色 */
  }
  
  /* 修改导航链接悬停颜色为蓝紫色，更符合学术网站 */
  #theme-starter .sticky #navbarCollapse li > a:hover{
    --tw-text-opacity: 1;
    color: rgb(79 70 229 / var(--tw-text-opacity)); /* 蓝紫色 - 更学术化 */
    opacity: 1;
  }

  #theme-starter .sticky #navbarCollapse li > button{
    --tw-text-opacity: 1;
    color: rgb(30 41 59 / var(--tw-text-opacity)); /* 深蓝色 */
  }
  
  :is(.dark #theme-starter .sticky #navbarCollapse li > a){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  /* 深色模式下链接悬停颜色 */
  :is(.dark #theme-starter .sticky #navbarCollapse li > a:hover){
    --tw-text-opacity: 1;
    color: rgb(129 140 248 / var(--tw-text-opacity)); /* 浅紫色 */
  }

  :is(.dark #theme-starter .sticky #navbarCollapse li > button){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  #navbarCollapse li .ud-menu-scroll.active{
    opacity: 0.7;
  }
  
  /* 修改活动链接的颜色 */
  #theme-starter .sticky #navbarCollapse li .ud-menu-scroll.active{
    --tw-text-opacity: 1;
    color: rgb(79 70 229 / var(--tw-text-opacity)); /* 蓝紫色 */
    opacity: 1;
  }
  
  /* 以下是登录按钮相关样式，可以保留但不常用 */
  #theme-starter .sticky .loginBtn{
    --tw-text-opacity: 1;
    color: rgb(30 41 59 / var(--tw-text-opacity)); /* 深蓝色 */
  }
  
  #theme-starter .sticky .loginBtn:hover{
    --tw-text-opacity: 1;
    color: rgb(79 70 229 / var(--tw-text-opacity)); /* 蓝紫色 */
    opacity: 1;
  }
  
  :is(.dark #theme-starter .sticky .loginBtn){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-starter .sticky .loginBtn:hover){
    --tw-text-opacity: 1;
    color: rgb(129 140 248 / var(--tw-text-opacity)); /* 浅紫色 */
  }
  
  /* 主题切换按钮颜色 */
  #theme-starter .sticky #themeSwitcher ~ span{
    --tw-text-opacity: 1;
    color: rgb(30 41 59 / var(--tw-text-opacity)); /* 深蓝色 */
  }
  
  :is(.dark #theme-starter .sticky #themeSwitcher ~ span){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  /* 以下是菜单切换动画，无需修改 */
  .navbarTogglerActive > span:nth-child(1){
    top: 7px;
    --tw-rotate: 45deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  
  .navbarTogglerActive > span:nth-child(2){
    opacity: 0;
  }
  
  .navbarTogglerActive > span:nth-child(3){
    top: -8px;
    --tw-rotate: 135deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  
  /* 文本颜色 - 修改为更专业的色调 */
  .text-body-color{
    --tw-text-opacity: 1;
    color: rgb(71 85 105 / var(--tw-text-opacity)); /* 稍深的灰蓝色 */
  }
  
  .text-body-secondary{
    --tw-text-opacity: 1;
    color: rgb(100 116 139 / var(--tw-text-opacity)); /* 中等灰蓝色 */
  }

  /* 轮播导航按钮样式 */
  .common-carousel .swiper-button-next:after,
  .common-carousel .swiper-button-prev:after{
    display: none;
  }

  .common-carousel .swiper-button-next,
  .common-carousel .swiper-button-prev{
    position: static !important;
    margin: 0px;
    height: 3rem;
    width: 3rem;
    border-radius: 0.5rem;
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(30 41 59 / var(--tw-text-opacity)); /* 深蓝色 */
    --tw-shadow: 0px 8px 15px 0px rgba(72, 72, 138, 0.08);
    --tw-shadow-colored: 0px 8px 15px 0px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  /* 轮播导航按钮悬停样式 */
  .common-carousel .swiper-button-next:hover,
  .common-carousel .swiper-button-prev:hover{
    --tw-bg-opacity: 1;
    background-color: rgb(79 70 229 / var(--tw-bg-opacity)); /* 蓝紫色 */
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  /* 深色模式下轮播导航按钮 */
  :is(.dark .common-carousel .swiper-button-next),:is(.dark 
  .common-carousel .swiper-button-prev){
    --tw-bg-opacity: 1;
    background-color: rgb(30 41 59 / var(--tw-bg-opacity)); /* 深蓝色 */
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  .common-carousel .swiper-button-next svg,
  .common-carousel .swiper-button-prev svg{
    height: auto;
    width: auto;
  }
  
  /* 添加学术网站常用的段落和引用样式 */
  .blog-content p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
  
  .blog-content blockquote {
    border-left: 4px solid rgb(79 70 229); /* 蓝紫色边框 */
    padding-left: 1rem;
    font-style: italic;
    margin: 1.5rem 0;
    color: rgb(71 85 105);
  }
  
  /* 改进标题样式 */
  .blog-content h2 {
    font-weight: 700;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    color: rgb(30 41 59); /* 深蓝色 */
  }
  
  .blog-content h3 {
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    color: rgb(51 65 85); /* 稍浅的深蓝色 */
  }
  
  /* 改进链接样式 */
  .blog-content a {
    color: rgb(79 70 229); /* 蓝紫色链接 */
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
    transition: color 0.2s ease;
  }
  
  .blog-content a:hover {
    color: rgb(99 102 241); /* 悬停时颜色变浅 */
  }
  
  /* 改进代码块样式 */
  .blog-content pre {
    background-color: rgb(243 244 246);
    padding: 1rem;
    border-radius: 0.375rem;
    overflow-x: auto;
    margin: 1.5rem 0;
  }
  
  :is(.dark .blog-content pre) {
    background-color: rgb(15 23 42);
  }
  `}</style>
}

export { Style }