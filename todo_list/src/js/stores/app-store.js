var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var AppDispatcher = require('../dispatchers/app-dispatcher.js');
var AppConstants = require('../constants/app-constants.js');

var CHANGE_EVENT = 'change';

var todos = [];

var addToDo = function(contents) {
  todos.push({
    contents: contents,
  });
};

var removeToDo = function(index) {
  todos.splice(index, 1);
};

var moveToDo = function(oldIndex, newIndex) {
  var todoToMove = todos.splice(oldIndex, 1)[0];
  todos.splice(newIndex, 0, todoToMove);
};

var AppStore = _.assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callbackFn) {
    this.on(CHANGE_EVENT, callbackFn);
  },

  getToDos: function() {
    return todos;
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch (action.actionType) {
      case AppConstants.ADD_TODO:
        addToDo(action.contents);
        break;
      case AppConstants.REMOVE_TODO:
        removeToDo(action.index);
        break;
      case AppConstants.DROP_TODO:
        moveToDo(action.oldIndex, action.newIndex);
        break;
    }

    AppStore.emitChange();

    return true; // let dispatcher know it can process next event
  })
});

module.exports = AppStore;