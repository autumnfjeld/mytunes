// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();

    this.collection.on('add', function(){
      console.log('This listener workds');
      this.render();
    }, this);

    this.collection.on('remove', function(){
      console.log('This revmoe listener workds');
      this.render();
    }, this);

  },

  render: function() {
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
