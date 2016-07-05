import * as Express from "express";
import * as http from "http";

let app = Express();

app.set("port", process.env.PORT || 2900);
app.use(Express.static("public"));
app.use("/node_modules", Express.static("node_modules"));


http.createServer(app).listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});

//in case can't find path it's probably SPA so...
app.use(function(req: any, res: any, next: any) {
  res.status(200).sendFile("/public/index.html", { root: "./" });
});
