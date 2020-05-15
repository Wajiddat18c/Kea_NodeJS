const express = require("express");

const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server);

const helmet = require('helmet')

app.use(helmet())


const escape = require('escape-html');

io.on('connection', socket =>{
    // console.log("HELLO!", socket.id)

    socket.on("a client wrote this", (data) =>{
        // console.log(data)

        //emits to all clients
        io.emit("A client said", {inputValue : escape(data.inputValue)});

        //only emits to the socket itself
        // socket.emit("A client said", data);

        //send to all but not the socket itself.
        // socket.broadcast.emit("A client said", data)
    });
});


app.get("/", (req, res) => {

    return res.sendFile(__dirname + "/index.html");
    })

server.listen(3000, (error) =>{
    if (error) {
        console.log("Error running the server");
    }
    console.log("Server is running on port:", 3000)
});