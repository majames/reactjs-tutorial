var React = require('react');
var Link = require('react-router-component').Link;

var AppStore = require('../../stores/app-store');
var RemoveFromCart = require('./app-removefromcart');
var IncreaseItem = require('./app-increaseitem');
var DecreaseItem = require('./app-decreaseitem');

var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');

var getCartItems = function() {
  return {
    cartItems: AppStore.getCart()
  };
};

var AppCart = React.createClass({
  mixins: [StoreWatchMixin(getCartItems)],

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
      <div>
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
        <Link href="/">Continue Shopping</Link>
      </div>
    );
  }

});

module.exports = AppCart;