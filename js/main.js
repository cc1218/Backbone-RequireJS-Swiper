require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'swiper':{
            exports:'Swiper'
        }
    },
    paths: {
        jquery: 'lib/jquery-1.11.1.min',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        text: 'lib/text',
        'swiper': 'lib/swiper.min'
    }
});

require( [
    'backbone',
    'router'
], function(Backbone){
    Backbone.history.start();
});
