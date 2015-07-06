
var NumInput = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf(['number', 'range']),
    val: React.PropTypes.number,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    contents: React.PropTypes.string,
    update: React.PropTypes.func.isRequired
  },

  getDefaultProps: function() {
    return {
      type: 'range',
      val: 0,
      min: 0,
      max: 0,
      step: 0.5,
      contents: 'default label'
    };
  },

  render: function() {
    return (
      <div>
        <label>{this.props.contents} - {this.props.val}</label>
        <br />
        <input
          ref="inp"
          type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.val}
          onChange={this.props.update} >
        </input>
      </div>
    );
  }

});


var App = React.createClass({

  getInitialState: function() {
    return {
      val: 125
    };
  },

  render: function() {
    return (
      <NumInput
        ref="num"
        max={255}
        update={this.update}
        val={this.state.val}
        step={5}
        type="number"
      />
    );
  },

  update: function() {
    this.setState({
      val: Number(React.findDOMNode(this.refs.num.refs.inp).value)
    });
  }

});

React.render(<App />, document.body);