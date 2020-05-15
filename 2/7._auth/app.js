const express = require("express");

const app = express();

app.use(express.json());


const session = require("express-session");
app.use(session({
    secret: require('./config/config.json').sessionSecret,
    resave: false,
    saveUninitialized: true
}))

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });
  
  app.use(limiter);


  const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 8 // limit each IP to 8 requests per windowMs
  });

  app.use("/signup", authLimiter);
  app.use("/login", authLimiter);

  
const port = process.env.PORT || 3000;

//const Model = require("objection").Model
const { Model } = require('objection');
const Knex = require('knex');
const knexfile = require('./knexfile.js');

const knex = Knex(knexfile.development);

Model.knex(knex);

//middleware code that runs on any routes.
// app.use((req, res, next) => {
//     console.log("time of request", new Date());
//     next();
// });

const authRoute = require("./routes/auth");
app.use(authRoute);


const userRoute = require("./routes/user");
app.use(userRoute);








// user route 

//auth route
//login
//signup



app.listen(port, (err) =>{
    console.log("Server running om port:", port)
})