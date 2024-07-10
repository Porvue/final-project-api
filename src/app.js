const expresss = require("express");
const mongoose = require("mongoose");

const app = expresss();
app.use(expresss.json())
const connectToDB = async () =>{
    try{
       await mongoose.connect('mongodb+srv://yerveu:BfzpyWTDSor7sX6C@cluster0.7uqwqp1.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0')
       console.log("connect to Database successfuly")
    }catch(error) {
        console.log("eror::",error)
    }

}
connectToDB();

const PORT = 5000;
app.listen(PORT,() =>{
    console.log(`server is runing on port ${PORT}`)
})
