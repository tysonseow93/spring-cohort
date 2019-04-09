const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    insertDocuments(db, ()=> {
        findDocuments(db, ()=> {
            client.close();
        });
    });
});

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('users');
    // Insert some documents
    collection.insertMany([
        // {firstName:"Tyson", lastName:"Xiao", age:25, email:"tyson.seow@gmail.com"},
        // {firstName:"Keisha", lastName:"Ding",age:26,email:"keisha.ding@gmail.com"}
        {
            name: {
                first: "Emma",
                last: "Farmer"
            },
            age: 18,
            index: 0,
            company: "FROLIX",
            email: "emma.farmer@frolix.name",
            phone: "+1 (945) 419-2025",
            address: "977 Sedgwick Street, Chase, New York, 1426"
        },
        {
            name: {
                first: "Delgado",
                last: "Strong"
            },
            age: 29,
            index: 1,
            company: "HYPLEX",
            email: "delgado.strong@hyplex.org",
            phone: "+1 (828) 402-2920",
            address: "475 Linden Street, Lisco, Kansas, 428"
        },
        {
            name: {
                first: "Flynn",
                last: "Thornton"
            },
            age: 44,
            index: 2,
            company: "VISUALIX",
            email: "flynn.thornton@visualix.biz",
            phone: "+1 (897) 442-3471",
            address: "308 Matthews Place, Shelby, Ohio, 870"
        },
        {
            name: {
                first: "Beatriz",
                last: "Cantrell"
            },
            age: 21,
            index: 3,
            company: "APPLIDECK",
            email: "beatriz.cantrell@applideck.co.uk",
            phone: "+1 (808) 578-2720",
            address: "895 Beacon Court, National, Nebraska, 5154"
        },
        {
            name: {
                first: "Suzanne",
                last: "Hebert"
            },
            age: 27,
            index: 4,
            company: "SPEEDBOLT",
            email: "suzanne.hebert@speedbolt.info",
            phone: "+1 (974) 590-3639",
            address: "746 Garden Street, Sanborn, Guam, 2513"
        },
        {
            name: {
                first: "Campos",
                last: "Ellison"
            },
            age: 52,
            index: 5,
            company: "DARWINIUM",
            email: "campos.ellison@darwinium.io",
            phone: "+1 (898) 413-3330",
            address: "379 Liberty Avenue, Shasta, Northern Mariana Islands, 3908"
        },
        {
            name: {
                first: "York",
                last: "Dominguez"
            },
            age: 46,
            index: 6,
            company: "ZENCO",
            email: "york.dominguez@zenco.net",
            phone: "+1 (875) 561-3192",
            address: "235 Varet Street, Hayden, Indiana, 9652"
        },
        {
            name: {
                first: "Tamera",
                last: "Curry"
            },
            age: 35,
            index: 7,
            company: "ACCUPHARM",
            email: "tamera.curry@accupharm.us",
            phone: "+1 (962) 578-3989",
            address: "769 Bryant Street, Virgie, Colorado, 3517"
        }

    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(8, result.result.n);
        assert.equal(8, result.ops.length);
        console.log("Inserted 8 documents into the collection");
        callback(result);
    });
};

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('users');
    // Find some documents
    collection.find().toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        callback(docs);
    });
}