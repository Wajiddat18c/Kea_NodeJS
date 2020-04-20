const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';



MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
  var myobj = { animal: "Bobcat", age: 16 };

  const dbName = db.db('bigCatsZoo');

  dbName.collection("cats").insertOne(myobj, (err, res) =>{
    console.log("1 cat inserted");
    db.close();
  });
});