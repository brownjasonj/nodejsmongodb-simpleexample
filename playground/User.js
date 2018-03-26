"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    User.collectionName = 'Users';
    return User;
}());
exports.User = User;
