var React = require('react');

var ToDoCreator = require('./app-todocreator.js');
var ToDoList = require('./app-todolist.js');

var App = React.createClass({

  render: function() {
    return (
      <section className="container">
        <section className="col-sm-6 col-sm-offset-3">
          <h1>To Do List</h1>
          <ToDoCreator />
          <ToDoList />
        </section>
      </section>
    )
  }
});

module.exports = App;