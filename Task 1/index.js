const express = require("express");
const app = express();
const data = require("./data.json");
const client = require("./db.js");

let port = process.env.PORT || 3020;

app.use(express.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
  });
  
app.get("/api/branches/autocomplete",async(req,res)=>{
  try{
    var queryParameter = req.query;
    console.log(queryParameter);
    let str = "SELECT * FROM branches WHERE Branch SIMILAR TO '"+queryParameter.q+"%' ORDER BY Ifsc LIMIT "+queryParameter.limit+" OFFSET "+queryParameter.offset
    console.log(str);
    const q = await client.query(str);
    res.json(q.rows);
  }catch(error){
    res.send("No result Found");
  }
})

app.get("/api/branches",async(req,res)=>{
  try{
    var queryParameter = req.query;
    console.log(queryParameter);
    const para =  queryParameter.q.toUpperCase();
    let str = "SELECT * FROM branches WHERE Ifsc = '"+para+"' OR Branch = '"+para+"' OR Address = '"+queryParameter.q+"' OR City = '"+para+"' OR District = '"+para+"' OR State = '"+para+"' ORDER BY Ifsc LIMIT "+queryParameter.limit+" OFFSET "+queryParameter.offset
    console.log(str);
    const q = await client.query(str);
    res.json(q.rows);
  }catch(error){
    res.send("No result Found");
  }
})

app.listen(port,()=>{
  console.log("Your server is running on port 3000");
})

//SELECT * FROM branches WHERE Ifsc = 'RTGS-HO' OR Bank_id = 60 OR Branch = 'RTGS-HO' OR Address = 'RTGS-HO' OR City = 'RTGS-HO' OR District = 'AKOLA' OR State = 'RTGS-HO' ORDER BY Ifsc LIMIT 12 OFFSET 0
