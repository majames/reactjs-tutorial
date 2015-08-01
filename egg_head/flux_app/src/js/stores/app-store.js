var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

// broadcasted event every time something changes
var CHANGE_EVENT = 'change';

// private variables
var catalog = [];

var cartItems = [];

// constructor
(function() {
  var i;

  for (i = 1; i < 9; i ++) {
    catalog.push({
      id: 'Widget ' + i,
      title: 'Widget #' + i,
      summary: 'This is an awesome widget!',
      description: 'Lorem ipsum dolor sit amet',
      cost: i,
      img: '/assets/product.png'
    });
  }
})();

// private functions

var removeItem = function(index) {
  cartItems[index].inCart = false;
  cartItems.splice(index, 1);
};

var increaseItem = function(index) {
  cartItems[index].quantity += 1;
};

var decreaseItem = function(index) {
  if (cartItems[index].quantity > 1) {
    cartItems[index].quantity -= 1;
  } else {
    removeItem(index);
  }
};

var addItem = function(item) {
  if (!item.inCart) {
    item.quantity = 1;
    item.inCart = true;
    cartItems.push(item);
  } else {
    cartItems.forEach(function(cartItem, i) {
      if(cartItem.id === item.id) {
        increaseItem(i);
      }
    });
  }
};

var cartTotals = function() {
  var totalQuantity = 0, totalCost = 0;

  cartItems.forEach(function(cartItem) {
    totalQuantity += cartItem.quantity;
    totalCost += cartItem.cost;
  });

  return {
    totalQuantity: totalQuantity,
    totalCost: totalCost
  };
};

// public functions

var AppStore = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callbackFn) {
    this.on(CHANGE_EVENT, callbackFn);
  },

  removeChangeListener: function(callbackFn) {
    this.removeListener(CHANGE_EVENT, callbackFn);
  },

  getCart: function() {
    return cartItems;
  },

  getCatalog: function() {
    return catalog;
  },

  getCartTotals: function() {
    return cartTotals();
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch (action.actionType) {
      case AppConstants.ADD_ITEM:
        addItem(payload.action.item);
        break;
      case AppConstants.REMOVE_ITEM:
        removeItem(payload.action.index);
        break;
      case AppConstants.INCREASE_ITEM:
        increaseItem(payload.action.index);
        break;
      case AppConstants.DECREASE_ITEM:
        decreaseItem(payload.action.index);
        break;
    }

    AppStore.emitChange();
    return true;
  })
});

module.exports = AppStore;

