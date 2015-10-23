define([
    'underscore',
    'backbone',
    'models/swiperitem'
], function(_, Backbone,SwiperItem){
    var Lists = Backbone.Collection.extend({
        model: SwiperItem,
        url: 'api/news.php'
    });
    return new Lists();
});