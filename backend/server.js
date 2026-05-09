const express = require("express");
const app = express();
const Product = require("./models/productModel");
const productSeed=require("./models/productJson");
const cors=require("cors");
app.use(cors());

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://baljeetmatta_db_user:Server4001@cluster0.jbjd8fy.mongodb.net/sectiond?appName=Cluster0")
    .then((response) => {
        console.log("Db connected...");
        seedDatabase();

    }).catch(() => {
        console.log("unable to connect to db", err);

    })
async function seedDatabase()
{

    let count=await Product.countDocuments();
    console.log(count);
    if(count<=5)
    {
      await  Product.deleteMany();

       await Product.insertMany(productSeed);
        console.log("Products Addded")

    }


}
//jsonplaceholder/getPosts?_page=1&_limit=10
// /getProducts?page=1
// /getProducts->page=1
app.get("/getProducts", async (req, res) => {

    try {
        let page = parseInt(req.query.page) || 1;
        let limit = 5;
        let skip = (page - 1) * limit
        let count=await Product.countDocuments();
        let totalPages=Math.ceil(count/limit)
        const products = await Product.find({}).skip(skip).limit(limit);
        res.status(200).json({
            products: products,
            count,
            totalPages

        })
    } catch (err) {
        res.status(500).json({
            err: err
        })
    }






})

app.listen(3000, (err) => {
    if (err)
        console.log("Error in starting server ", err);
    else
        console.log("Server Started...")
})