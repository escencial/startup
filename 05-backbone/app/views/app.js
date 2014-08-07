var app = app || {};

app.AppView = Backbone.View.extend({
    el: '#moviesApp',
    events: {
        'click #add': 'addMovie',
        'keypress': 'keyAction'
    },
    initialize: function () {
        this.$title = this.$('#new-title');
        this.$director = this.$('#new-director');
        this.$year = this.$('#new-year');
        this.listenTo(app.Movies, 'add', this.add);
        app.Movies.fetch();
    },
    add: function (movie) {
        var view = new app.MovieView({model: movie});
        $('#movies-list').append(view.render().el);
    },
    keyAction: function (e) {
        var code = e.keyCode || e.which;
        if(code === 13) {
            this.addMovie();
        }
    },
    addMovie: function () {
        if (this.$title.val() === '' ||
            this.$director.val() === '' ||
            this.$year.val() === '') {
            return;
        }
        app.Movies.create({
            title: this.$title.val(),
            director: this.$director.val(),
            year: this.$year.val()
        });
        this.$title.val('');
        this.$director.val('');
        this.$year.val('');
    }
});
