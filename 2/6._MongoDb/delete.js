const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';


MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {

    const dbName = db.db('bigCatsZoo');

    
    var myquery = { animal: "GeoPart" };

    dbName.collection("cats").deleteOne(myquery, function(err, obj) {

        console.log("1 document deleted");
      db.close();
    });
  });
  