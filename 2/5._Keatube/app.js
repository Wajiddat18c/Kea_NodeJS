const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())

//express.satic giver filer fra mapper static
app.use(express.static('public'));
app.use(express.static('videos'));



app.get("/", (req, res) => {

    
    return res.sendFile(__dirname + "/public/frontpage/frontpage.html")

});

app.get("/player/:id", (req, res) => {

    return res.sendFile(__dirname + "/public/player/player.html")
});


console.log(process.env.PORT)
//if else, if port is defind then run PORT else run porn 3000
const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});

