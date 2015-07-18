var React = require('react');

var ToDoCreator = React.createClass({
  render: function() {
    return (
      <section className="row">
        <input type="text" placeholder="Enter new todo" className=" col-xs-7 col-xs-offset-1 todocreator-input" />
        <button type="submit" className="btn btn-default col-xs-2 col-xs-offset-1">Add TODO</button>
      </section>
    );
  }
});

module.exports = ToDoCreator;