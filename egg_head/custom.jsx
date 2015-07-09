var App = React.createClass({

  getInitialState: function() {
    return {
      data: [1, 2, 3, 4, 5, 6, 7]
    };
  },

  render: function() {
    var items = this.state.data.map(function(datum) {
      return <li>{datum}</li>;
    });

    return (
      <div>
        {items}
      </div>
    );
  }
});

React.render(<App />, document.body);