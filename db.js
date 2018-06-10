module.exports = {
    addContact(newContact, callback) {
        if (config.isUsingDB()) {
            collection.insertOne(
                newContact
                , callback)
        }
    else {
console.log(newContact);
callback(false,null);
    }
}
}
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID;
const config = require('./config');
const url = 'mongodb://localhost:27017'
let collection = null;
if (config.isUsingDB()) {
    MongoClient.connect(url, (error, client) => {
        if (error) {
            console.log('Error connecting to db ' + error);
            return process.exit(1);
        }
        console.log("connected to database successfully.")
        db = client.db("familySiteDb");
        collection = db.collection('contact');
    })
}