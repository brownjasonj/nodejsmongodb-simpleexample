"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var TodoItem = /** @class */ (function () {
    function TodoItem(id, text) {
        this.text = text;
        this.completed = false;
        if (id) {
            this.ref = id;
        }
        else {
            this.ref = new mongodb_1.ObjectID();
        }
    }
    TodoItem.collectionName = 'Todos';
    return TodoItem;
}());
exports.TodoItem = TodoItem;
