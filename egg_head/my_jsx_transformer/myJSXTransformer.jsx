var MyJSXTransformer = React.createClass({
  getInitialState: function() {
    return {
      input: '',
      output: '',
      error: ''
    };
  },

  update: function(evt) {
    var inputJSXCode = evt.target.value;

    try {
      this.setState({
        output: JSXTransformer.transform(inputJSXCode).code,
        error: ''
      });
    } catch (error) {
      this.setState({
        error: error.message
      });
    }
  },

  render: function() {
    return (
      <div>
        <div className="row">
          <p className="alert alert-danger error-msg">{this.state.error}</p>
        </div>
        <div>
          <textarea defaultValue={this.state.input} className="col-sm-6 input-lg code-input" onChange={this.update} />
          <pre className="col-sm-6 input-lg code-output">{this.state.output}</pre>
        </div>
      </div>
    );
  }

});

React.render(<MyJSXTransformer />, document.body);