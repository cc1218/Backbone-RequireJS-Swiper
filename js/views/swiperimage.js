define([
    'jquery',
    'underscore',
    'backbone',
    'swiper',
    'collections/lists',
    'views/swiperitem'
], function($, _, Backbone, Swiper, Lists, listItemView){
    ListView = Backbone.View.extend({
        el: '#images',
        initialize: function () {
            this.collection = Lists;
            this.collection.fetch({
                reset: true,
                success:function(){
                    var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        paginationClickable: true,
                        // Disable preloading of all images
                        preloadImages: false,
                        // Enable lazy loading
                        lazyLoading: true
                    });
                }
            });
            this.render();
            this.listenTo(this.collection, 'reset', this.render);
        },
        render: function () {
            this.collection.each(function (item) {
                var listitemView = new listItemView({
                    model: item
                });
                this.$el.append(listitemView.render().el);
            }, this);

        }
    });
    return ListView;
});