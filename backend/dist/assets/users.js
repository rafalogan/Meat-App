"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    'juliana@ju.com': new User('juliana@ju.com', 'Juliana Martins', 'juliana23'),
    'amanda@mandi.com': new User('amanda@mandi.com', 'Amanda', 'amanda21'),
    'root@root.com': new User('root@root.com', 'root', 'root@100')
};
