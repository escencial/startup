define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var MoviesModel = Backbone.Model.extend({
    defaults: {
      name: ''
    }
  });
  // Return the model for the module
  return MoviesModel;
});