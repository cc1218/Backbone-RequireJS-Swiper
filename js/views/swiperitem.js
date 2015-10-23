define([
    'jquery',
    'underscore',
    'backbone',
    'text!tpl/swiperitem.html'
], function($, _, Backbone,tplListItem) {
    var homedatuView = Backbone.View.extend({
        tagName:'div',
        className:'swiper-slide',
        template: _.template(tplListItem),
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        events:{
            "click .datu_image":"test"
        },
        test:function(){
            console.log("click");
        }
    });
    return homedatuView;
});