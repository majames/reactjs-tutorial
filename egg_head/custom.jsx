var App = React.createClass({

  render: function() {
    return (
      <Title className="red" id="blue" value="green" />
    );
  }

});

var Title = React.createClass({
  render: function() {
    return <h1 {...this.props}>Using the spread operator</h1>;
  }
});

React.render(<App />, document.body);