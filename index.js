const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res)=>{
  res.send("Hello Phong Khoang");
})
app.get("/api/test", (req, res) => {
  const env = process.env;
  res.send(env);
})



// start app
const port = process.env.PORT || 4000;
app.listen(port, ()=>{
  console.log(`Server starting at ${port}...`);
})