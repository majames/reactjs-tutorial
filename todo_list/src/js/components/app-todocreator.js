var React = require('react');
var AppActions = require('../actions/app-actions.js');

var ToDoCreator = React.createClass({
  handle: function() {
    var nativeTextInput = React.findDOMNode(this.refs.todoContents);
    AppActions.addToDo(nativeTextInput.value);
  },

  render: function() {
    return (
      <section className="row">
        <input ref="todoContents" type="text" placeholder="Enter new todo" className=" col-xs-7 col-xs-offset-1 todocreator-input" />
        <button type="submit" className="btn btn-default col-xs-2 col-xs-offset-1" onClick={this.handle}>Add TODO</button>
      </section>
    );
  }
});

module.exports = ToDoCreator;