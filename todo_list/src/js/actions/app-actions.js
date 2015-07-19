var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {
  addToDo: function(contents) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_TODO,
      contents: contents
    });
  },
  removeToDo: function(index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_TODO,
      index: index
    });
  }
};

module.exports = AppActions;