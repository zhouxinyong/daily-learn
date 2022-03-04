import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Daily-Learn',
  favicon:
    'https://s01.mifile.cn/favicon.ico',
  logo: 'https://s02.mifile.cn/assets/static/image/logo-mi2.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  menus: {
    '/DesignPatterns': [
      {
        title: '设计模式',
        children: [
          'Singleton',
          'Observer'
        ]
      }
    ]
  }
  // more config: https://d.umijs.org/config
});
