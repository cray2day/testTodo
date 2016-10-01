/**
 * Created by cray2day on 01.10.2016.
 */

(function () {

    var listData = [
        {"id": "1", "task": "do something", "isCompleted": "false"},
        {"id": "2", "task": "do something again", "isCompleted": "false"},
        {"id": "3", "task": "do something one more time", "isCompleted": "false"}
    ];

    function TodoItem(id, task, isCompleted) {
        var self = this;

        self._id = id;
        self._task = task;
        self._isCompleted = isCompleted;

        var liId,
            liTask,
            liStatus,
            ul;

        liId = document.createElement('li');
        liId.innerText = self._id;
        self.id = liId;

        liTask = document.createElement('li');
        liTask.innerText = self._task;
        self.task = liTask;

        liStatus = document.createElement('li');
        liStatus.innerText = self._isCompleted ? 'yes' : 'no';
        self.status = liStatus;

        ul = document.createElement('ul');
        ul.appendChild(liId);
        ul.appendChild(liTask);
        ul.appendChild(liStatus);

        ul.onclick = function () {
            self.toggleStatus();
        };

        self.DOMElement = ul;
    }

    TodoItem.prototype.get = function () {
        return this.DOMElement;
    };

    TodoItem.prototype.toggleStatus = function () {
        var self = this;

        self._isCompleted = !self._isCompleted;
        self.status.innerText = self._isCompleted ? 'yes' : 'no';
    };

    TodoItem.prototype.addEvent = function (event, callback) {

    };


    function TodoList() {
        var self = this;
        self._items = {};
        self._container = document.getElementById('todo-list');
    }

    TodoList.prototype.addItem = function (id, item) {
        var self = this;
        self._items[id] = item;
        self._container.appendChild(item);
    };

    function draw(items) {
        var todoList = new TodoList();

        for (var i = 0; i < items.length; i++) {
            var todoItem = new TodoItem(items[i].id, items[i].task, items[i].isCompleted);
            todoList.addItem(todoItem._id, todoItem.get());
        }
    }

    draw(listData);

})();
