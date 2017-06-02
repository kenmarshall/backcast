var VideoPlayerView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, 'select', this.handleSelect);
  },

  handleSelect: function(model){
    //console.log(e);
    this.model = model;
    this.render()
  },

  render: function() {

    if (this.model) {
      console.log(this.model.attributes);
      this.$el.html(this.template(this.model.attributes));
    }

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
