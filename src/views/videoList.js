var VideoListView = Backbone.View.extend({
  initialize : function(){
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.video-list').html('');
    this.collection.forEach(this.renderVideoListEntry, this);
    return this;
  },

  renderVideoListEntry: function (video){

    var videoListEntryView =  new VideoListEntryView({
      model: video
    });

    this.$('.video-list').append(videoListEntryView.render());

  },

  template: templateURL('src/templates/videoList.html')

});
