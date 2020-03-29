const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const port = process.env.PORT || 4000;
  console.log(`http-proxy-middleware using port# ${port}`);
  app.use(
    "/",
    createProxyMiddleware({
      target: `http://localhost:${port}`,
      changeOrigin: true,
    })
  );
};
