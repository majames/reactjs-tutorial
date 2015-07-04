var App = React.createClass({
  render: function() {
    return (
      <div>
        <button onClick={this.mount}>Mount the Component</button>
        <button onClick={this.unmount}>Unmount the component</button>
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

var Button = React.createClass({
  getInitialState: function() {
    return {
      val: 0
    };
  },

  componentWillMount: function() {
    console.log('Mounting... Called before initial render');
  },

  render: function() {
    console.log('rendering');
    return <button onClick={this.update}>{this.state.val}</button>;
  },

  componentDidMount: function() {
    console.log('Mounted. Called after initial render');
  },

  componentWillUnmount: function() {
    console.log('Component unmounting...');
  },

  update: function() {
    this.setState({
      val: this.state.val + 1
    });
  }
});

React.render(<App />, document.body);