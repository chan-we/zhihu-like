const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://127.0.0.1:2233/",
      changeOrigin: true, // 设置跨域请求
    })
  );
};
