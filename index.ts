import * as express from "express"

const app = express()

const port = process.env.PORT || 3094

app.listen(port, () => {
    console.log("api corriendo en port", port);
})
app.get("/users", (req,res)=>{
    res.json({
        users:[]
    })
})
app.post("/users", (req,res)=>{
    res.status(201).json({
        "message": "ok",
        "id": 1234
    })
})
app.get("/users/:userId/products", (req,res)=>{
    res.json({
        products:[]
    })
})