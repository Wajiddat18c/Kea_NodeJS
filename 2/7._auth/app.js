const express = require("express");

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

//const Model = require("objection").Model
const { Model } = require('objection');
const Knex = require('knex');
const knexfile = require('./knexfile.js');

const knex = Knex(knexfile.development);

Model.knex(knex);


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