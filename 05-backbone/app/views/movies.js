var app = app || {};

app.MovieView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#movie-template').html()),
    events: {
        'click #save': 'save',
        'click .destroy': 'deleteItem'
    },
    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.$title = this.$('#title');
        this.$director = this.$('#director');
        this.$year = this.$('#year');
        this.details = '#/details/';
        this.$('.details').attr('href', this.details + this.$title.val() + '/' + this.$director.val() + '/' + this.$year.val());
        return this;
    },
    save: function () {
        this.model.save({
            title: this.$title.val(),
            director: this.$director.val(),
            year: this.$year.val()
        });
    },
    deleteItem: function() {
        this.model.destroy();
    }
});