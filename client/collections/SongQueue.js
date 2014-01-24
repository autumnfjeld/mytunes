var SongQueue = Songs.extend({

  initialize: function(){
    this.on('ended', this.dequeue, this);

    this.on('ended', function(){
      if(this.models.length){this.playFirst();};
    }, this);
    
    this.on('dequeue', this.dequeue, this);

    this.on('enqueue', function () {
      debugger;
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
  },
  
  enqueue: function (song) {
    console.log('In SongQueue.enqueue', this);
    this.add(song)
    _(this.models).last().enqueue();
  },

  dequeue: function (song) {
    this.remove( _(this.models).first() );
  },
  
  playFirst: function () {
    _(this.models).first().play();
  }
});