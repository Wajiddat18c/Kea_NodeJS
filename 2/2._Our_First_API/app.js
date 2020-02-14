//import
const express = require("express");
const app = express();

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

//port
                //hvis vi ikke her flere end 1 argument så tilføjer man ( )
app.listen(3000, error => {
        //Null or Undefind or 0 check
    if (error) {
        console.log("Error running the server", error);
    }
    console.log("Server is running on port", 3000);
});


