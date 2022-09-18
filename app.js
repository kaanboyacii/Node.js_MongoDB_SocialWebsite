import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import pageRoute from "./routes/pageRoute.js";

dotenv.config();

//connect db
conn();

const app = express();
const port = process.env.PORT;

app.set('view engine','ejs');

//static files middleware
app.use(express.static('public'));

// app.get("/",(req,res)=>{
//     res.render('index');
// })

// app.get("/about",(req,res)=>{
//     res.render('about');
// })

//routes
app.use('/', pageRoute);

app.listen(port,()=>{
    console.log(`App running on port: ${port}`);
});