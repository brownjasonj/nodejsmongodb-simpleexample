"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
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
    // "5ab89b8cfea624b62939d0ed"
    db.collection(TodoItem_1.TodoItem.collectionName).findOne({ _id: new mongodb_1.ObjectID("5ab89b8cfea624b62939d0ed") }, {}, function (error, result) {
        if (error) {
            console.log('Unable to find document');
            return;
        }
        var todo = result;
        todo.text = 'Eat Lunch and Dinner';
        db.collection(TodoItem_1.TodoItem.collectionName).update({ _id: new mongodb_1.ObjectID("5ab89b8cfea624b62939d0ed") }, todo, function (error, result) {
            if (error) {
                console.log("Failed to update document " + todo);
                return;
            }
            console.log("Updated document to " + JSON.stringify(result));
        });
        console.log(result);
    });
    // client.close();
});
