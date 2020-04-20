const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';


MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {

    const dbName = db.db('bigCatsZoo');


    let myquery = { age: 12 };

    let newvalues = { $set: {animal: "Tiger", age: 234 } };

    dbName.collection("cats").updateOne(myquery, newvalues, function(err, res) {
      console.log("1 cat updated");
      db.close();
    });
  });