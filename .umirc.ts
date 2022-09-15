// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';

const BaseUrl = '/react-components-lib-temp'; // 访问的仓库路径

export default defineConfig({
  title: 'test-dumi-father-lib',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // 打包路径配置
  base: BaseUrl,
  publicPath: BaseUrl + '/', // 打包文件时，引入地址生成 publicPath/xxx.js
  exportStatic: {}, // 对每隔路由输出html
  dynamicImport: {}, // 动态导入
  alias: {},

  hash: true, //加hash配置，清除缓存
  manifest: {
    // 内部发布系统规定必须配置
    fileName: 'manifest.json',
  },

  // 多国语顺序
  locales: [
    ['en-US', 'English'],
    ['zh-CN', '中文'],
  ],

  // 主题
  theme: {
    '@c-primary': '#03a9f4',
  },
});
