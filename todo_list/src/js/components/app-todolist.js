var React = require('react');
var ToDo = require('./app-todo.js');

var ToDoList = React.createClass({
  getInitialState: function() {
    var i, todos = [];

    for (i = 0; i < 7; i++) {
      todos.push(<ToDo key={i} />);
    }

    return {
      todos: todos
    };
  },

  render: function() {
    return (
      <ul className="list-unstyled">{this.state.todos}</ul>
    )
  }
});

module.exports = ToDoList;