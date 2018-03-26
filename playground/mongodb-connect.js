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
    // db.collection(TodoItem.collectionName).insertOne(new TodoItem('Something to do'), 
    //     (error, result) => {
    //         if (error) {
    //             console.log('Unable to insert Todo item', error);
    //             return;
    //         }
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //      });
    var user = new User_1.User('Fred', 27, 'USA');
    db.collection(User_1.User.collectionName).insertOne(user, function (error, result) {
        if (error) {
            console.log('Unable to insert User', error);
            return;
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    client.close();
});
