"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var mongoDbUri = 'mongodb://localhost:27017';
var mongoDbName = 'TodoApp';
var TodoItem = /** @class */ (function () {
    function TodoItem(text) {
        this.text = text;
        this.completed = false;
    }
    TodoItem.collectionName = 'Todos';
    return TodoItem;
}());
var User = /** @class */ (function () {
    function User(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    User.collectionName = 'Users';
    return User;
}());
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
    db.collection(User.collectionName).insertOne(new User('John', 27, 'USA'), function (error, result) {
        if (error) {
            console.log('Unable to insert User item', error);
            return;
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    client.close();
});
