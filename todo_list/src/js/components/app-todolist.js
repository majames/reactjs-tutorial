var React = require('react');
var AppStore = require('../stores/app-store.js');
var ToDo = require('./app-todo.js');

var ToDoList = React.createClass({
  getInitialState: function() {
    return {
      todos: []
    };
  },

  componentWillMount: function() {
    AppStore.addChangeListener(this.onChange);
  },

  onChange: function() {
    this.setState({
      todos: AppStore.getToDos().map(function(todo, i) {
        return <ToDo contents={todo.contents} key={i} id={i} />;
      })
    });
  },

  render: function() {
    return (
      <ul className="list-unstyled">{this.state.todos}</ul>
    )
  }
});

module.exports = ToDoList;