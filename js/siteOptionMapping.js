window.siteOptionMapping = {
  title: 'Cloud Charts 图表库',
  description: 'AISC 组件库中的数据可视化解决方案',
  aisc_lib_version: '2.9.30',
  aisc_widgets_lib_version: '2.6.14',
  fe_version: '0.3.1',
  header_nav_list: JSON.stringify([
    { text: '首页', href: '/' },
    { text: '设计语言', href: '/design/Layout' },
    { text: '图表示例', href: '/example/Recommendation' },
    // TODO: 开源版本教程内容需要重写，所以先隐藏掉教程模块
    // { text: '开发指南', href: '/quickstart/userGuide' },
    { text: 'API文档', href: '/documentation/config' },
    {
      text: '可视化编辑',
      href: '/studio/WlineStudio',
      children: [
        {
          text: '图表设计器',
          href: '/theme/try',
        },
      ],
    },
  ]),
  header_logo: '//img.alicdn.com/tfs/TB1VYVLQ7T2gK0jSZFkXXcIQFXa-353-60.png',
  header_logo_content: '//img.alicdn.com/tfs/TB1mzN0c0Tfau8jSZFwXXX1mVXa-353-60.png',
  logo_home_main: '//img.alicdn.com/tfs/TB1LWBqd7cx_u4jSZFlXXXnUFXa-705-120.png',
  footer_logo: '//img.alicdn.com/tfs/TB1jUaruAT2gK0jSZPcXXcKkpXa-154-62.png',
  footer_description:
    'TXD（Technology Experience Design 技术体验设计） 作为阿里云智能事业群-基础产品事业部的核心团队之一，以“引领未来科技体验潮流”为愿景，为大阿里集团创造高品质运维工具、打造企业级数据可视化产品、设计数据中心无人值守机器人。',
  footer_link_community: JSON.stringify([
    {
      text: '微信公众号',
      qrcode: '//img.alicdn.com/tfs/TB1ijJiQhTpK1RjSZR0XXbEwXXa-860-860.png',
    },
    {
      text: 'UI 中国',
      href: 'https://i.ui.cn/ucenter/1171433.html',
    },
    {
      text: '掘金',
      href: 'https://juejin.im/user/5ad6eec3f265da23a1426da3',
    },
    {
      text: '人人都是产品经理',
      href: 'http://www.woshipm.com/u/698224',
    },
    {
      text: 'Github',
      href: 'https://github.com/txd-team',
    },
  ]),
  footer_link_resource: null,
  footer_copyright: 'Copyright © 2020 TXD',
  footer_extra_text: '特别感谢 AntV 团队的大力支持\n',
  theme_list: JSON.stringify([
    { label: '亮色', value: 'normal', color: '#f3f3f3' },
    { label: '暗色', value: 'dark', color: '#20222e' },
  ]),
  third_party_component_list: [
    'NumberCard',
    'Table',
    'TopList',
    'SlideCard',
    'Tree',
    'Heat',
    'TrafficDistribution',
    'PolarPoint',
    'WordCloud',
    'CloudRingChart',
  ].join('\n'),
  example_internal_list: [
    'Recommendation-warning',
    'Recommendation-ip',
    'Recommendation-instance',
  ].join('\n'),
  video_source: {
    sloganBg: 'videos/widgets_home.mp4',
    featLeft: 'videos/home-s-1.mp4',
    featCenter: 'videos/home-s-2.mp4',
    featRight: 'videos/home-s-3.mp4',
  },
};
