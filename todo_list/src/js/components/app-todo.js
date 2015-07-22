var React = require('react');
var AppActions = require('../actions/app-actions.js');

var ToDo = React.createClass({
  removeToDo: function() {
    AppActions.removeToDo(this.props.id);
  },

  toDoDrop: function(evt) {
    AppActions.dropToDo(Number.parseInt(evt.dataTransfer.getData('key')), this.props.id);
  },

  toDoDragOver: function(evt) {
    evt.preventDefault();
  },

  toDoDragStart: function(evt) {
    evt.dataTransfer.setData('key', this.props.id);
  },

  render: function() {
    return (
      <li className="row todo-row" draggable="true" onDrop={this.toDoDrop} onDragOver={this.toDoDragOver} onDragStart={this.toDoDragStart}>
        <h4 className="col-xs-8 col-xs-offset-1 todo-contents">
          {this.props.contents}
        </h4>
        <div onClick={this.removeToDo} className="col-xs-1 col-xs-offset-1 glyphicon glyphicon-remove todo-glyphicon">
        </div>
      </li>
    )
  }
});

module.exports = ToDo;