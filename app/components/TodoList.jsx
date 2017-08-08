var React = require('react');

//using require gives access to the pure react component.
//we want to grab the connected todo
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');
var {connect} = require('react-redux');

export var TodoList = React.createClass({
    render: function () {
        var {todos, showCompleted, searchText} = this.props;

        var renderTodos = () => {
            var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);

            if(filteredTodos.length === 0) {
                return (
                    <p className="container_message"> nothing to do </p>
                );
            }

            return filteredTodos.map( (todo) => {
              return (
                  <Todo key={todo.id} {...todo} />
              );
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
});

//we want to do a connection and connect it
//to TodoList.
//The data that are going to be passed in teh TodoList
//are defind in the first argument of connect which let us define
//which pieces of state our component wants
export default connect(
    (state) => {
        return state;
    }

)(TodoList);