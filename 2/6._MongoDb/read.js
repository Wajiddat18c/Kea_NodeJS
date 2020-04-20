const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';


// Database Name
const dbName = 'bigCatsZoo';

// Use connect method to connect to the server
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
    // assert.equal(null, err);
    console.log("Connected successfully to server");
   
    const bigCatsDB = client.db(dbName);
    
    const cats= bigCatsDB.collection("cats");

    cats.find().limit(10).toArray((error, foundCats) =>{

        console.log(foundCats)
        client.close();
    });

  });
 