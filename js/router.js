define(['backbone'],function (Backbone) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "home",
            "home/" : "home"
        },
        home: function() {
            require(['views/swiperimage'], function (ListView) {
               var listview=new ListView();
            });
        }
    });
    return new AppRouter();
});