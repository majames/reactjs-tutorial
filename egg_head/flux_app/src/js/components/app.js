var React = require('react');
var AppActions = require('../actions/app-actions.js');

var App = React.createClass({
  handler: function() {
    AppActions.addItem('this is an add item action');
  },

  render: function() {
    return (
      <h1 onClick={this.handler}>My Flux App</h1>
    );
  }

});

module.exports = App;