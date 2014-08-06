// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/layout'
], function($, _, Backbone, layoutView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '': 'index',

      // Default
      '*actions': 'defaultAction'
    },
    index: function () {
      var l = new layoutView();
      l.render();
    },
    defaultAction: function (actions) {
      console.log('No route:', actions);
    }
  });

  return {
    
    initialize: function() {
      var app_router = new AppRouter ();
      Backbone.history.start();
    }

  };
});