var React = require('react');

var Item = require('./app-item.js');
var ToDoCreator = require('./app-todocreator.js');

var App = React.createClass({

  render: function() {
    var i, items = [];

    for (i = 0; i < 7; i++) {
      items.push(<Item />);
    }

    return (
      <section className="container">
        <section className="col-sm-6 col-sm-offset-3">
          <h1>To Do List</h1>
          <ToDoCreator />
          <ul className="list-unstyled">{items}</ul>
        </section>
      </section>
    )
  }
});

module.exports = App;