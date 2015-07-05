var Button = React.createClass({
  getInitialState: function() {
    return {
      val: 0
    };
  },

  componentWillMount: function() {
    console.log('Mounting... Useful for setting up state each time component is mounted');

    this.setState({
      multiplier: 2
    });
  },

  render: function() {
    console.log('rendering');
    return <button onClick={this.update}>{this.state.val * this.state.multiplier}</button>;
  },

  componentDidMount: function() {
    console.log('Mounted. Useful for starting timed events');
    this.inc =setInterval(this.update, 1000);
  },

  componentWillUnmount: function() {
    console.log('Unmounted. Useful for ensuring no state is set after component is unmounted');
    clearInterval(this.inc);
  },

  update: function() {
    this.setState({
      val: this.state.val + 1
    });
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="target"></div>
      </div>
    );
  },

  mount: function() {
    React.render(<Button />, document.getElementById('target'));
  },

  unmount: function() {
    React.unmountComponentAtNode(document.getElementById('target'));
  }


});

React.render(<App />, document.body);