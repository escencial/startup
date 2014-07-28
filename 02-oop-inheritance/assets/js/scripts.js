/**
 * Define Movies Module
 */
var Movie = function () {
  // set Vars
  this.attributes = {};
  this.attributes.actors = [];
};

Movie.prototype = (function () {
  var observers = [];
  // public ..
  return {
    play: function () {
      console.log('play');
      this.notify('onPlay');
    },
    stop: function () {
      console.log('stop');
      this.notify('onStop');
    },
    // Get Method
    get: function (attr) {
      console.log('get');
      console.log(this);
      return this.attributes[attr];
    },
    // Set Method
    set: function (attr, value) {
      console.log('set');
      this.attributes[attr] = value;
    },
    // Observer Methods
    addObserver: function (name, func) {
      console.log('addObserver');
      observers.push({name: name, func: func});
    },
    removeObserver: function (observer) {
      console.log('removeObserver');
      observers.slice(observer);
    },
    notify: function (obs) {
      console.log('notify');
      observers.forEach(function(observer) {
        if (obs === observer.name) {
         return observer.func();
        }
      });
    },
    // Add an Actor
    addAnActor: function(actor) {
      console.log('setActors');
      this.attributes.actors.push(actor);
    },
    // Get Actors
    getActors: function() {
      console.log('getActors');
      this.attributes.actors.forEach(function(actor){
        console.log(actor.get('name'));
      });
    }
  };
})();

// Add Observers ..
Movie.prototype.addObserver('onPlay', function() {
  console.log('Playing ' + Movie.prototype.get('title') + ' ...');
});

Movie.prototype.addObserver('onStop', function() {
  console.log('Stoped');
});

// Create instance of Movie
// var terminator = Object.create(Movie);
var terminator = new Movie();
terminator.set('title', 'Terminator');
terminator.play();

/**
 * Extend Method for heritage
 */
extend = function(destination, source) {
      for (var property in source) {
        destination[property] = source[property];
      }
      return destination;
};

/**
 * Define DownloadMovie Module.
 */
var DownloadMovie = (function(){
  return {
    download: function () {
      console.log('downloading ...' + this.get('title'));
    }
  };
})();

// Do heritage
extend(Movie, DownloadMovie);

/**
 * Define Social Mixin
 */
var MixinSocial = {
  share: function (friendName) {
    console.log('share with ' + this.get('title') + ' ' + friendName);
  },

  like: function () {
    console.log('like!');
  }
};
// Do heritage
extend(Movie, MixinSocial);

// Create instance of Movie
var ironman2 = Object.create(Movie);
ironman2.set('title', 'Iron Man 2');
// ...
ironman2.share('V. Rivas'); // output: Sharing Iron Man 2 with V. Rivas

/**
 * Define Actor Mudule
 */
var Actor = (function() {
  var attributes = [];
  return {
    get: function (attr) {
      console.log('actor/get');
      return attributes[attr];
    },
    set: function (attr, value) {
      console.log('actor/set');
      attributes[attr] = value;
    }
  };
})();

// Create instance of Actor
var schwarzenegger = Object.create(Actor);
schwarzenegger.set('name', 'Arnold Schwarzenegger');

// Add actor to Movie instance
terminator.addAnActor(schwarzenegger);
terminator.getActors();

// Create instance of Actor
var downey = Object.create(Actor);
downey.set('name', 'Robert Downey Jr');

// Add actor to Movie instance
ironman2.addAnActor(downey);
ironman2.getActors();

var bttf = Object.create(Movie);
bttf.set('title', 'Back to the Future');

var fox = Object.create(Actor);
fox.set('name', 'Michael j Fox');

bttf.addAnActor(fox);
bttf.getActors();