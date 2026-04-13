const express = require("express")
const app = express();
const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const User = require("./models/User")
const session = require("express-session");

app.set("view engine", "ejs");  
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false
}))

mongoose.connect("mongodb://localhost:27017/authHonrs")
.then(()=>{console.log("DB is connected")})
.catch(()=>{console.log("DB is not connected")})

app.get("/",(req,res)=>{
    res.render("Home")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",async (req,res)=>{
    const {username,email,password}=req.body;
    const saltRounds = 10;
    const Hashedpass = await bcrypt.hash(password,saltRounds)
    const existingUser = await User.findOne({username})
    if(!existingUser){
        await User.create({username,email,password:Hashedpass})
            res.redirect('/login')
    }
    else{
        res.redirect('/signup')
    }
})

app.get('/login',(req,res)=>{
    res.render("login")
})

app.post('/login',async(req,res)=>{
        const {username , password} = req.body;

        const user = await User.findOne({username});
        if (!user) {
            return res.redirect('/login');
        }
        const pass = await bcrypt.compare(password, user.password);

        if (pass) {
            req.session.userId = user._id;
            res.redirect('/payment');
        } else{
            res.redirect('/login')
        }
})

let isAuth = (req,res,next)=>{
    if(req.session.userId){
        next();
    } else{
        res.redirect("login")
    }
}
app.get('/payment',isAuth,(req,res)=>{
    res.render("payment");
})

app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login');
})


const PORT = 8080;
app.listen(PORT,()=>{
    console.log("server is running on port 8080.")
})