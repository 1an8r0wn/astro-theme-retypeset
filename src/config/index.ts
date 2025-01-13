import type { ThemeConfig } from '@/types'

export const themeConfig: ThemeConfig = {
  // SITE INFORMATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  site: {
    title: 'retypeset',
    subtitle: '再现版式之美',
    description: '一个优美的博客主题',
    author: 'radishzz',
    url: 'http://localhost:4321/',
    favicon: '#',
  },
  // SITE INFORMATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // COLOR SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  color: {
    mode: 'light',
    light: {
      primary: '#000000',
      backgroundStart: '#ffffff',
      backgroundEnd: '#f5f5f5',
    },
    dark: {
      primary: '#000000',
      backgroundStart: '#ffffff',
      backgroundEnd: '#000000',
    },
  },
  // COLOR SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // GLOBAL SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  global: {
    language: 'zh',
    font: 'sans',
    rss: true,
    toc: true,
  },
  // GLOBAL SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // COMMENT SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  comment: {
    waline: {
      serverURL: '#',
      emoji: [
        '#',
        '#',
      ],
      search: true,
      imageUploader: true,
    },
  },
  // COMMENT SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // SEO SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  seo: {
    twitter: 'https://twitter.com/radishzz',
    meta: {
      google: '#',
      bing: '#',
      baidu: '#',
    },
    link: '#',
    googleAnalyticsID: '#',
    umamiAnalyticsID: '#',
    follow: {
      feedID: '#',
      userID: '#',
    },
  },
  // SEO SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // FOOTER SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  footer: {
    linkA: {
      name: 'RSS',
      url: '#',
    },
    linkB: {
      name: 'Contact',
      url: '#',
    },
    linkC: {
      name: 'GitHub',
      url: '#',
    },
  },
  // FOOTER SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END
}

export default themeConfig
