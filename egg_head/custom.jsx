var PropTypesApp = React.createClass({
  propTypes: {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
  },

  getDefaultProps: function() {
    return {
      txt: 'this is a default prop',
      cat: 0
    };
  },

  render: function() {
    var txt = this.props.txt;
    return (
      <div>
        <b>BOLD</b>
        <h1>{txt}</h1>
      </div>
    );
  }
});

var StateApp = React.createClass({
  getInitialState: function() {
    return {
      red: 0,
      green: 0,
      blue: 0
    };
  },

  update: function(e) {
    this.setState({
      red: this.refs.red.refs.inp.getDOMNode().value,
      green: this.refs.green.refs.inp.getDOMNode().value,
      blue: this.refs.blue.refs.inp.getDOMNode().value,
    });
  },

  render: function() {
    return (
      <div>
        <label>{this.state.red}</label>
        <Slider ref="red" update={this.update} />

        <label>{this.state.green}</label>
        <Slider ref="green" update={this.update} />

        <label>{this.state.blue}</label>
        <Slider ref="blue" update={this.update} />
      </div>
    );
  }
});

var Slider = React.createClass({
  render: function() {
    return (
      <div>
        <input ref="inp" type="range" min="0" max="255" onChange={this.props.update} />
      </div>
    );
  }
});


React.render(<StateApp />, document.body);