var React = require('react');
var AppActions = require('../actions/app-actions.js');

var ToDo = React.createClass({
  handle: function() {
    AppActions.removeToDo(this.props.id);
  },

  render: function() {
    return (
      <li className="row todo-row">
        <h4 className="col-xs-8 col-xs-offset-1 todo-contents">
          {this.props.contents}
        </h4>
        <div onClick={this.handle} className="col-xs-1 col-xs-offset-1 glyphicon glyphicon-remove todo-glyphicon">
        </div>
      </li>
    )
  }
});

module.exports = ToDo;