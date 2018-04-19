//load our app server using express somehow
const express =require('express')
const app=express()
const morgan =require('morgan')
app.use(morgan('short'))


app.get("/",(req,res)=>{
  console.log("Responding to  root route")
  res.send("Hello from Roooot")

})
app.get("/users",(req,res)=>{
var user1={firstName:"Stephen",lastName:"Curry"}
const user2={firstName:"Kevin ",lastName:"Durant"}
res.json([user1,user2])

  //res.send("Nodemon autom updates wheni save this file")
})

app.listen(3004,()=>{
  // localhost:3004
  console.log("Server is up and listening on 3004...")
})
