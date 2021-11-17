"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("./Model");
var _lastId = 0;
function generateTodoId() {
    return _lastId += 1;
}
function clone(src) {
    var clone = JSON.stringify(src);
    return JSON.parse(clone);
}
;
var TodoService = /** @class */ (function () {
    function TodoService(todos) {
        var _this = this;
        this.todos = [];
        if (todos) {
            todos.forEach(function (todo) { return _this.add(todo); });
        }
    }
    TodoService.prototype.add = function (input) {
        var todo = {
            id: generateTodoId(),
            name: null,
            state: Model_1.TodoState.Active
        };
        if (typeof input === 'string') {
            todo.name = input;
        }
        else if (typeof input.name === 'string') {
            todo.name = input.name;
        }
        else {
            throw 'Invalid Todo name!';
        }
        this.todos.push(todo);
        return todo;
    };
    ;
    TodoService.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (x) { return x.state == Model_1.TodoState.Active; });
    };
    TodoService.prototype.getAll = function () {
        return clone(this.todos);
    };
    ;
    TodoService.prototype.getById = function (todoId) {
        var todo = this._find(todoId);
        return clone(todo);
    };
    ;
    TodoService.prototype.toggle = function (todoId) {
        var todo = this._find(todoId);
        if (!todo)
            return;
        switch (todo.state) {
            case Model_1.TodoState.Active:
                todo.state = Model_1.TodoState.Complete;
                break;
            case Model_1.TodoState.Complete:
                todo.state = Model_1.TodoState.Active;
                break;
        }
    };
    TodoService.prototype._find = function (todoId) {
        var filtered = this.todos.filter(function (x) { return x.id == todoId; });
        if (filtered.length) {
            return filtered[0];
        }
        return null;
    };
    return TodoService;
}());
exports.default = TodoService;
//# sourceMappingURL=TodoService.js.map