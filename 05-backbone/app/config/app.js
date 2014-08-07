requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '../../vendor/js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../../app',
        models: '../../app/models',
        views: '../../app/views',
        collections: '../../app/collections',
        jquery: 'jquery.min',
        underscore: 'underscore-min',
        backbone: 'backbone-min',
        localstorage: "backbone.localStorage"
    }
});

// Start the main app logic.
requirejs(['jquery', 'underscore', 'backbone', '../../app/config/router.js'],
function ( $, _, Backbone, router, MoviesColl) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    router.initialize();
});