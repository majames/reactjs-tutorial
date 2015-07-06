var App = React.createClass({

  render: function() {
    return (
      <div>
        <Button txt="I am a button" />
        <br />
        <Label txt="I am a label" />
      </div>
    );
  }

});

var Mixin = {
  componentWillMount: function() {
    console.log('mounting...');
  },

  getInitialState: function() {
    return {
      increment: 0
    };
  },

  updateIncrement: function() {
    this.setState({
      increment: this.state.increment + 1
    });
  }
};

var Button = React.createClass({
  mixins: [Mixin],

  render: function() {
    return (
      <button onClick={this.updateIncrement}>{this.props.txt} - {this.state.increment}</button>
    );
  }

});

var Label = React.createClass({
  mixins: [Mixin],

  render: function() {
    return (
      <label>{this.props.txt} - {this.state.increment}</label>
    );
  },

  componentWillMount: function() {
    setInterval(this.updateIncrement, 1000);
  }

});


React.render(<App />, document.body);