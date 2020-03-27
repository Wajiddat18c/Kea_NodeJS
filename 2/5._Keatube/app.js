const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())

//express.satic giver filer fra mapper static
app.use(express.static('public'));
app.use(express.static('videos'));
app.use(express.static('assets'));


const fs = require('fs');


const footer = fs.readFileSync("public/footer/footer.html", "utf8");
const frontpage = fs.readFileSync("public/frontpage/frontpage.html", "utf8");
const navbar = fs.readFileSync("public/navbar/navbar.html", "utf8");
const player = fs.readFileSync("public/player/player.html", "utf8");
const upload = fs.readFileSync("public/upload/upload.html", "utf8");



app.get("/", (req, res) => {

    const page = navbar + frontpage + footer;
    // return res.sendFile(__dirname + "/public/frontpage/frontpage.html")
    return res.send(page)

});

app.get("/player/:id", (req, res) => {

    const page = navbar + player + footer;

    // return res.sendFile(__dirname + "/public/player/player.html")
        return res.send(page)

});

app.get("/upload", (req, res) => {

    const page = navbar + upload + footer;
    return res.send(page)

});

// import routes
const videoRoutes = require("./routes/videos.js");
//set up routes
app.use(videoRoutes);


console.log(process.env.PORT)
//if else, if port is defind then run PORT else run porn 3000
const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});

