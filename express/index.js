import express from "express"
// console.log(`🚀 ~ express:`, express)
const app=express()
// console.log(`🚀 ~ app:`, app)

app.get("/ok", (peticion, respuesta)=>{
     respuesta.send("<h1>get ok</h1>")
})


app.post("/", (req, res)=>{
     res.send("post ok")
})




app.listen(8080,()=>{
     console.log("servidor ok")
})