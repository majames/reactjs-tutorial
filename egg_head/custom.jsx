var PersonTable = React.createClass({

  getInitialState: function() {
    return {
      data: [
        { id: 1, fname: 'Michael', lname: 'James' },
        { id: 2, fname: 'Annika', lname: 'James' },
        { id: 3, fname: 'Andrew', lname: 'James' },
        { id: 4, fname: 'Haimish', lname: 'James' },
      ]
    };
  },

  render: function() {
    var rows = this.state.data.map(function(value, index) {
      return <PersonRow data={value} key={value.id} />;
    });

    return (
      <table>{rows}</table>
    );
  }

});

var PersonRow = React.createClass({

  render: function() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.fname}</td>
        <td>{this.props.data.lname}</td>
      </tr>
    );
  }

});

React.render(<PersonTable />, document.body);
