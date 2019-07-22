// see http://vuejs-templates.github.io/webpack for documentation.
var path = require("path");

module.exports = {
  build: {
    env: require("./prod.env"),
    index: path.resolve(__dirname, "../dist/index.html"),
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "./",
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require("./dev.env"),
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {
      // 匹配代理的url
      "/portal-admin": {
        // 目标服务器地址
        target: "http://baidu.com", // 测试
        changeOrigin: true,
        headers: {
          "Access-Control-Allow-origin": "*"
          // 'Cookie': 'JSESSIONID=164e5472-ffee-4c61-b283-99ad5c6cabe8;'
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    port: 8080,
    autoOpenBrowser: true,
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    cacheBusting: true,
    cssSourceMap: false
  }
};
