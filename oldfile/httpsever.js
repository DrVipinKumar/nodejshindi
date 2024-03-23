const app=require('http');
const homepage=(res,rep)=>{
    rep.write("<h1>Welcome to HTTP Server in Node Js</h1>");
    rep.end();
}
console.log("Running on 127.0.0.1:3000");
app.createServer(homepage).listen(3000);