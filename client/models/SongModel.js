// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    console.log("I'm in SongModel play function")
  },

  enqueue: function(){
    this.trigger('enqueue', this);
    console.log("I'm in SongModel enqueue function")
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  }

});
