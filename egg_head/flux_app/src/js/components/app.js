var React = require('react');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var Catalog = require('./catalog/app-catalog');
var Cart = require('./cart/app-cart');
var Template = require('./app-template');
var CatalogDetail = require('./product/app-catalogdetail');

var App = React.createClass({
  render: function() {
    return (
      <Template>
        <Locations>
          <Location path="/" handler={Catalog} />
          <Location path="/cart" handler={Cart} />
          <Location path="/item/:item" handler={CatalogDetail} />
        </Locations>
      </Template>
    );
  }

});

module.exports = App;