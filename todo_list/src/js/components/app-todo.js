var React = require('react');

var ToDo = React.createClass({

  render: function() {
    return (
      <li className="row item-row">
        <h4 className="col-xs-8 col-xs-offset-1">
          ToDo Name
        </h4>
        <div className="col-xs-1 col-xs-offset-1 glyphicon glyphicon-remove item-glyphicon">
        </div>
      </li>
    )
  }
});

module.exports = ToDo;