"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoApp = void 0;
var TodoService_1 = require("./TodoService");
var TodoListComponent_1 = require("./TodoListComponent");
var TodoApp = /** @class */ (function () {
    function TodoApp(el, todos) {
        this.todoService = new TodoService_1.default(todos);
        this.initialize(el);
    }
    TodoApp.prototype.addTodo = function (todoName) {
        this.todoService.add(todoName);
        this.renderTodos();
    };
    TodoApp.prototype.clearCompleted = function () {
        this.todoService.clearCompleted();
        this.renderTodos();
    };
    TodoApp.prototype.toggleTodoState = function (todoId) {
        this.todoService.toggle(todoId);
        this.renderTodos();
    };
    TodoApp.prototype.renderTodos = function () {
        var todos = this.todoService.getAll();
        this.todoList.render(todos);
    };
    TodoApp.prototype.initialize = function (el) {
        var _this = this;
        var addTodoFormEl = el.getElementsByClassName('add-todo')[0], addTodoNameEl = addTodoFormEl.getElementsByTagName('input')[0], todoListEl = el.getElementsByClassName('todo-list')[0], clearCompletedEl = el.getElementsByClassName('clear-completed')[0];
        addTodoFormEl.addEventListener('submit', function (evnt) {
            _this.addTodo(addTodoNameEl.value);
            addTodoNameEl.value = '';
            evnt.preventDefault();
        });
        todoListEl.addEventListener('todo-toggle', function (evnt) {
            var todoId = evnt.detail.todoId;
            _this.todoService.toggle(todoId);
            _this.renderTodos();
        });
        clearCompletedEl.addEventListener('click', function () {
            _this.clearCompleted();
        });
        this.todoList = new TodoListComponent_1.default(todoListEl);
        this.renderTodos();
    };
    return TodoApp;
}());
exports.TodoApp = TodoApp;
//# sourceMappingURL=TodoApp.js.map