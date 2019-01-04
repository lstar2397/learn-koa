const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'Home';
});

router.get('/about', (ctx, next) => {
    ctx.body = 'About';
});

router.get('/about/:name', (ctx, next) => {
    const { name } = ctx.params;
    ctx.body = 'About ' + name;
});

router.get('/post', (ctx, next) => {
    const { id } = ctx.request.query;
    if (id) {
        ctx.body = 'Post #' + id;
    } else {
        ctx.body = 'No Post ID';
    }
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('heurm server is listening to port 3000');
});