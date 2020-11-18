import { Application, Router, send } from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { recursiveReaddir } from "https://deno.land/x/recursive_readdir/mod.ts";

const app = new Application();
const router = new Router();
 
const getImages = async (ctx, next) => {
  await next();
  let body = "";
  const files = await recursiveReaddir("/static/images");
  files.forEach(element => {
      body += `<img src="${element}" alt="Katze">`
  });
  ctx.response.body = body;
}

// Static Images
/*app.use(async (ctx,next) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/static`
  });
  next();
})*/

app.use(async (ctx, next) => {
  await next();
  let body = "Test"
  const files = await recursiveReaddir("/static/images");
  console.log(files)
  files.forEach(element => {
      body += `<img src="${element}" alt="Katze">`
  });
  ctx.response.body = body
});

app.use(router.routes());
//app.use(router.allowedMethods());
app.listen({port:8000});
console.log("http://localhost:8000/");