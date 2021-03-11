const express = require ("express");

const path = require("path");
const mysql = require("mysql");

const dotenv = require('dotenv');

dotenv.config({ path: './.env' })


const app = express();

const db = mysql.createConnection({

   host: process.env.DATABASE_HOST,
   user: process.env.DATABASE_USER,
   password: process.env.DATABASE_PASSWORD,
   database: process.env.DATABASE



});


const publicDirectory = path.join(__dirname,'./public');

app.use(express.static(publicDirectory));

//console.log(__dirname);
//parse url -encoded bodies (as sent by html forms)
app.use(express.urlencoded({extended: false}));

//parse json -encoded bodies (as sent by html forms)
app.use(express.json())

app.set('view engine', 'hbs');



//database connection error cheakcing
db.connect((error)=>{
     
   if(error){

     console.log(error)
   } else{
       console.log("Mysql Connected....")
   }

})

// app.get("/",(req,res) =>{


// //    res.send("<h1> Home page </h1>")
//          res.render("index");
  
// });


// app.get("/register", (req, res) => {


//     //    res.send("<h1> Home page </h1>")
//     res.render("register");

// });

// app.get("/login", (req, res) => {


//     //    res.send("<h1> Home page </h1>")
//     res.render("login");

// });







app.use('/',require('./routes/pages'));




app.use('/auth', require('./routes/auth'));

app.listen(5000,()=>{

    console.log("Server Started on port 5000"); 

})