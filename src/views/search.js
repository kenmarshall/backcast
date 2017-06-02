var SearchView = Backbone.View.extend({

  events: {
    'click button': 'search',
    'keyup input': 'handleKeyUp'
  },

  search : function () {
    var query = this.$('input').val();
    this.collection.search(query);
    this.$('input').val('');
  },

  handleKeyUp: function(e) {
    if (e.keyCode === 13) {
      this.search();
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
