var React = require('react');
var AppStore = require('../stores/app-store');
var RemoveFromCart = require('./app-removefromcart');
var IncreaseItem = require('./app-increaseitem');
var DecreaseItem = require('./app-decreaseitem');

var AppCart = React.createClass({
  getInitialState: function() {
    return {
      cartItems: AppStore.getCart()
    };
  },

  componentWillMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      cartItems: AppStore.getCart()
    });
  },

  render: function() {
    var total = 0;
    var items = this.state.cartItems.map(function(item, i) {
      var subtotal = item.cost * item.quantity;
      total += subtotal;

      return (
        <tr key={i}>
          <td><RemoveFromCart index={i}/></td>
          <td>{item.title}</td>
          <td>{item.quantity}</td>
          <td>
            <IncreaseItem index={i} />
            <DecreaseItem index={i} />
          </td>
          <td>${subtotal}</td>
        </tr>
      );
    });

    return (
      <table className="table table-hover">
        <thead>
          <th></th>
          <th>Item</th>
          <th>Quantity</th>
          <th></th>
          <th>Subtotal</th>
        </thead>

        <tbody>
          {items}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan="4" className="text-right">Total</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
    );
  }

});

module.exports = AppCart;