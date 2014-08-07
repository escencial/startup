var app = app || {};

var MoviesList = Backbone.Collection.extend({
    model: app.Movie,
    localStorage: new Backbone.LocalStorage('MoviesCollection')
});

app.Movies = new MoviesList();
