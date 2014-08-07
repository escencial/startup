define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/movies',
  'localstorage'
], function(_, Backbone, MoviesModel){

  var MoviesCollection = Backbone.Collection.extend({

    classname: 'MoviesCollection',
    model: MoviesModel,
    localStorage: new Backbone.LocalStorage('MoviesCollection')

  });

  // You don't usually return a collection instantiated
  return MoviesCollection;
});