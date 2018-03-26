"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var User_1 = require("./User");
var mongoDbUri = 'mongodb://localhost:27017';
var mongoDbName = 'TodoApp';
mongodb_1.MongoClient.connect(mongoDbUri, function (error, client) {
    if (error) {
        console.log("Unable to connect to MongoDB server: " + mongoDbUri);
        return;
    }
    console.log("Connected to MongoDB server: " + mongoDbUri);
    var db = client.db(mongoDbName);
    // delete Many
    // db.collection(TodoItem.collectionName).deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });
    // db.collection(User.collectionName).deleteMany({name: 'Fred'}).then((result) => {
    //     console.log(result);
    // });
    // delete One
    // db.collection(TodoItem.collectionName).deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });
    // findOneAndDelete
    // db.collection(TodoItem.collectionName).findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    // find and delete one using Id
    db.collection(User_1.User.collectionName).findOneAndDelete({ _id: new mongodb_1.ObjectID("5ab7e81568838c6463c1be44") }).then(function (result) {
        console.log(result);
    });
    // client.close();
});
