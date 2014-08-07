var app = app || {};

app.Movie = Backbone.Model.extend({
    defaults: {
        title: '',
        director: '',
        year: ''
    },
    validate: function (attrs) {
      if (!attrs.title) {
        return 'Please enter movie name ..';
      }
      if (!attrs.director) {
        return 'Please enter director name ..';
      }
      if (!attrs.year) {
        return 'Please enter year ..';
      }
    }
});
