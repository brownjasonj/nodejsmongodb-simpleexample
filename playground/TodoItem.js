"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var TodoItem = /** @class */ (function () {
    function TodoItem(ref, text) {
        this.text = text;
        this.completed = false;
        if (ref) {
            this.ref = ref;
        }
        else {
            this.ref = uuid_1.v4();
        }
    }
    TodoItem.collectionName = 'Todos';
    return TodoItem;
}());
exports.TodoItem = TodoItem;
