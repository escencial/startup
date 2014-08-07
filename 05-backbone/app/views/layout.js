
define([
  'jquery',
  'underscore',
  'backbone',
  'collections/movies'
], function($, _, Backbone, MoviesCollection) {
  var MoviesListView = Backbone.View.extend({
    el: '.container',
    events: {
     'click .add' : 'addMovie',
     'keypress': 'keyAction'
    },
    addMovie: function () {
      if ($('.movie').val() === '') {
        alert('please enter a movie name');
        return false;
      }
      this.collection.add({ name: $('.movie').val() });
      this.render();
    },
    initialize: function () {
      /*
      require(['MoviesCollection'], function (MoviesColl) {
        var MoviesCollection = new MoviesColl();
      });
      */
      this.collection = new MoviesCollection();
    },
    keyAction: function(e) {
        var code = e.keyCode || e.which;
        if(code == 13) {
            this.addMovie();
        }
    },
    render: function() {
      // Using Underscore we can compile our template with data
      var compiledTemplate = _.template(
        $('#entry-template').html(),
        {movies: this.collection.models}
      );
      // Append our compiled template
      this.$el.html( compiledTemplate );
      // focus on imput text
      $('.movie').val('');
      $('.movie').focus();
    }
  });
  // Our module now returns our view
  return MoviesListView;
});