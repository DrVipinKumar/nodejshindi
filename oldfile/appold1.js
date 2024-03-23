const express=require("express");
const path=require("path");
const htmlfiles=path.join(__dirname,"public");
const app =express();
app.use(express.static(htmlfiles));
app.get("/",(req,res)=>{
res.sendFile(htmlfiles+"/index.html");
//    res.send(`
//    <h1>Dr. Vipin Classes</h1>
//    <h2> This is HTML rendering</h2>
//    `);
});
app.get("/json",(req,res)=>{
   const studentInfo=[{
    name:"Ravi Kumar",
    age:"23"
   },
   {
    name:"Ravi Kumar",
    age:"23"
   },
   {
    name:"Ravi Kumar",
    age:"23"
   }
]
  
   res.send(JSON.stringify(studentInfo));
});
app.get("*",(req,res)=>{
   res.sendFile(htmlfiles+"/404.html");
});
app.listen(process.env.port||3000,(error)=>{
   if(error)
   console.log(error);

   console.log("Server running at 127.0.0.1:3000");
});