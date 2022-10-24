const Koa = require("koa");
const router = require("koa-router")();
const mockData = require("./mockData");
const app = new Koa();

router.get("/api/content", async (ctx) => {
  ctx.body = mockData[Math.floor(Math.random() * mockData.length)];
  // ctx.body = mockData[mockData.length - 1];
});

app.use(router.routes());
app.listen(2233);
console.log("mock: 2233");
