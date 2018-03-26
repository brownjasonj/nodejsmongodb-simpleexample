"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoItem = /** @class */ (function () {
    function TodoItem(text) {
        this.text = text;
        this.completed = false;
    }
    TodoItem.collectionName = 'Todos';
    return TodoItem;
}());
exports.TodoItem = TodoItem;
