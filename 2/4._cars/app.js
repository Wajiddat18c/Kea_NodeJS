const express = require("express");
const app = express();


// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())


let cars = [
    { id: 1, brand: "Mercedes" }, 
    { id: 2, brand: "BMW" }
];

let currentId = 2;

app.get("/", (req, res) => {
    return res.send({ response: "Car API version 0.0.1" });
});

app.get("/cars", (req, res) => {
    return res.send({ response: cars })
});

// /cars/1
app.get("/cars/:id", (req, res) => {
    const car = cars.find(car => car.id === Number(req.params.id));
    return res.send({ response: car });
});


// app.post("/cars", (req, res) => {
//     console.log(req.body)
//     let newCar = req.body

//     cars.push(newCar);
//     return res.send({ newCar: newCar });
// });

app.post("/cars", (req, res) => {
    let newCar = req.body;
    newCar.id = ++currentId;
    cars.push(newCar);

    return res.send({ response: {} });
});


app.put("/Cars/:id", (req, res) => {
    const foundIndex = cars.findIndex(car => car.id === Number(req.params.id));
    delete req.body.id;

    const updateCar = { ...cars[foundIndex],...req.body };

    cars[foundIndex] = updateCar;
    return res.send({ response: cars});
    
});

// app.delete("/cars/:id", (req, res) => {
    
//     const car = cars.find(car => car.id === Number(req.params.id));

//     let a = cars.splice(cars.indexOf(car), 1 );

//     return res.send({ response: cars });

// });

app.delete("/cars/:id", (req, res) => {
    cars = cars.filter(car => car.id !== Number(req.params.id));
    return res.send({ response : cars})
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

