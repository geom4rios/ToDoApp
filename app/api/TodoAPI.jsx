var $ = require('jquery');

module.exports = {
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