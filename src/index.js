const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'home';
});

router.get('/about', (ctx) => {
  ctx.body = 'introduction';
});

router.get('/about/:name?', (ctx) => {
  const { name } = ctx.params;
  ctx.body = name ? `${name}` : 'ddd';
});

router.get('/posts', (ctx) => {
  const { id } = ctx.query;
  ctx.body = id ? `${id}` : 'ddd';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
