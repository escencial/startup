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
        jquery: 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
        underscore: 'underscore-min',
        backbone: 'backbone-min',
        localstorage: "backbone.localStorage"
    },
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        localStorage: {
            deps: ['backbone'],
            exports: 'Backbone'
        }
    },
    config: {
        text: {
            useXhr: function (url, protocol, hostname, port) {
                //Override function for determining if XHR should be used.
                //url: the URL being requested
                //protocol: protocol of page text.js is running on
                //hostname: hostname of page text.js is running on
                //port: port of page text.js is running on
                //Use protocol, hostname, and port to compare against the url
                //being requested.
                //Return true or false. true means "use xhr", false means
                //"fetch the .js version of this resource".
                return true;
            }
        }
    }
});

// Start the main app logic.
requirejs(['jquery', 'underscore', 'backbone', '../../app/router.js'],
function ( $, _, Backbone, router) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    router.initialize();
});