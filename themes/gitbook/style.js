/* eslint-disable react/no-unknown-property */
import BLOG from '@/blog.config'

/**
 * Gitbook主题样式
 * @returns
 */
export const Style = () => {
  return (
    <>
      <link rel="stylesheet" href="/css/custom-gitbook-theme.css" />
      
      <style jsx global>{`
        // 底色
        .dark body {
          background-color: black;
        }

        .bottom-button-group {
          box-shadow: 0px -3px 10px 0px rgb(0, 120, 248);
        }
      `}</style>
    </>
  )
}
