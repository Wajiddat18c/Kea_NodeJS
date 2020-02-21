//import
const express = require("express");
const app = express();

const request = require("request");


            //Callback funtion
            //non blocking os (blockere ikke recusere)
app.get("/", (req, res) => {
    //json
    const response = {
        message : "Welcome to my site!",
    }
    //return 
    res.send(response);
});


app.get("/aboutMe", (req, res) => {
    //json
    const infoAboutMe = {
        name: "Wajid",
        age: 20
    }

    res.send(infoAboutMe);
});

const days = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday"];


app.get("/time", (req, res) =>{

    const date = new Date();

    const time = {
        time: date.toString(),
        day: date.getDay(),
        weekday: days[date.getDay()]
    }

    res.send(time);
});

//create a get route on / users
app.get("/users/:id", (req, res) =>{


    // const userId = {
    //     id: [
    //     {
    //         id: 1,
    //         name: "ali"
    //     },
    //     {
    //         id: 2,
    //         name: "wajid"
    //     },
    // ]
    // }

    // let abc = req.params.id;
    // for(i = 0; i < abc.length; i++){
    //     if(abc === req.params){
    //         return res.send({a:"h"})
    //     }
    // }
    console.log(req.params); // json objekt der indeholder alle parametere
    res.send({})
})



app.get("/search", (req, res) => {
    console.log(req.query)
   return res.send(req.query);
})

//Proxy server with request
app.get("/google", (req, res) =>{
    request('http://www.google.com', (error, response, body) => {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    return res.send(body);

    });
});

app.get("/documentationone", (req, res) => {
    //console.log(__dirname); // shows where node is running from

    // return res.redirect("/documentationtwo"); // serverside rederection
    return res.sendFile(__dirname + "/public/ducumentationone.html");
    })

app.get("/documentationtwo", (req, res) =>{
    return res.sendFile(__dirname+ "/public/documentationtwo.html")
})

//port
                //hvis vi ikke her flere end 1 argument så tilføjer man ( )
app.listen(3000, error => {
        //Null or Undefind or 0 check
    if (error) {
        console.log("Error running the server", error);
    }
    console.log("Server is running on port", 3000);
});


