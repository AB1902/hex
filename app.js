const express=require("express")
const app=express()
const axios=require("axios")
const router=require("express-router")
const {parse, stringify, toJSON, fromJSON} = require('flatted')

app.get("/",(req,res) => {
    res.send("route working")
})

app.get("/data",async(req,res)=>{
    try {
        const data=await axios.get("https://jsonplaceholder.typicode.com/users")
        // const data1=JSON.parse(data)
        // const data2=JSON.stringify(data1)
        // console.log(data.data)
        res.send(data.data)
    } catch (error) {
        console.error(error)
        res.send("internal error")
    }
})

app.listen(process.env.PORT||1902,(req,res) => {
    console.log("SERVER STARTED")
})

