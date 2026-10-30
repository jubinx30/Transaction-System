const app = require("./src/app");

app.get('/',(req,res)=>{
    res.send("hello");
})

app.listen(4000,()=>{
    console.log("Server is running on port 3200")
})

