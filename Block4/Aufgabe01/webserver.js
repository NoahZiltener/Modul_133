import { serve } from"https://deno.land/std@0.74.0/http/server.ts";


 const s = serve({ port:8000 });
  console.log("http://localhost:8000/");
   for await (const req of s) {
       let html;
       const site = req.url;
       console.log(site)
       switch(site){
           case "/foo":
               html = await Deno.readTextFile("helloworld.html");
               break;
            case "/bar":
                html = await Deno.readTextFile("test.html");
                break;
            default:
                html = await Deno.readTextFile("helloworld.html");
                break;
       }
       req.respond({ body:html }); } 