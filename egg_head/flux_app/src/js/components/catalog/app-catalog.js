var React = require('react');

var AppStore = require('../../stores/app-store');
var AddToCart = require('./app-addtocart.js');
var CatalogItem = require('./app-catalogitem.js');

var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');

var getCatalog = function() {
  return {
    items: AppStore.getCatalog()
  };
};

var Catalog = React.createClass({
  mixins: [StoreWatchMixin(getCatalog)],

  render: function() {
    var items = this.state.items.map(function(item) {
      return (
        <CatalogItem item={item} key={item.id} />
      );
    });

    return (
      <div className="row">
        {items}
      </div>
    );
  }

});

module.exports = Catalog;