"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var User_1 = require("./User");
var TodoItem_1 = require("./TodoItem");
var mongoDbUri = 'mongodb://localhost:27017';
var mongoDbName = 'TodoApp';
mongodb_1.MongoClient.connect(mongoDbUri, function (error, client) {
    if (error) {
        console.log("Unable to connect to MongoDB server: " + mongoDbUri);
        return;
    }
    console.log("Connected to MongoDB server: " + mongoDbUri);
    var db = client.db(mongoDbName);
    // db.collection(TodoItem.collectionName).find({_id: new ObjectID('5ab893d21aae15663f54a907')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    //     client.close();
    // }, (error) => {
    //     console.log('Unable to fetch todos', error);
    // });
    db.collection(TodoItem_1.TodoItem.collectionName).find().count().then(function (count) {
        console.log("Todos count: " + count + "\n");
    }, function (error) {
        console.log('Unable to fetch todos', error);
    });
    db.collection(User_1.User.collectionName).find({ name: 'Fred' }).forEach(function (doc) {
        var user = doc;
        console.log("User : " + user.name);
    }, function (error) {
        console.log('Unable to fetch todos', error);
    });
    // client.close();
});
