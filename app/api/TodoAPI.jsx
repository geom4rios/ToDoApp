var $ = require('jquery');

module.exports = {
    setTodos: function(todos) {
        if ($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },

    getTodos: function() {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            var todos = JSON.parse(stringTodos);
        } catch (e) {

        }

        return $.isArray(todos) ? todos : [];

        /*if($.isArray(todos)) {
            return todos;
        } else {
            return [];
        }*/
    },

    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        // Filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();

            return searchText.length === 0 || text.indexOf(searchText) > -1;

        });

        // Sort todos with non-completed first
        // return -1 a should come before b
        // return 1 b should come before a
        // return 0 then no change happens
        filteredTodos.sort((a, b) => {
            if(!a.completed === false && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }

};