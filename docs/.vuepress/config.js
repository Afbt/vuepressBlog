module.exports = {
    title: 'change',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      locales:{
        '/' : {
          nav:[ // 导航栏配置
            {text: '小试牛刀', link: '/accumulate/' },
            // {text: '前端基础', link: '/accumulate/' },            
            // {text: '微博', link: 'https://baidu.com'}
          ],
          sidebar: {
            '/accumulate/' :[
              {
                title: '小试牛刀',
                collapsable: false,
                children: [
                  '',
                  // 'peizhi'
                ],
              }
            ]
          }
        }
      }
      
    }
  };