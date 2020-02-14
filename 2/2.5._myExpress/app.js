const express = require("express");
const app = express();

app.get("/", (req, res) => {

    const mes = {
        "site": "Hello"
    }
    
    res.send(mes);
});


app.listen(3000);