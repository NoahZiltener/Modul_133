import { Application, Router, send } from "https://deno.land/x/oak@v6.3.1/mod.ts";
const app = new Application();
const router = new Router();

router.get("/foo", context => send(context, "helloworld.html"));
router.get("/bar", context => send(context, "test.html"));

app.use(router.routes());
app.listen({port:8000});
console.log("http://localhost:8000/");