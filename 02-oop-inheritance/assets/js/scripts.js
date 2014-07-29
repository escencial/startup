// Define Movie
var Movie = function () {
  // set Vars
  this.attributes = {};
  this.attributes.actors = [];
};

/**
 * Define Movies Prototype as a Module
 */
Movie.prototype = (function () {
  var observers = [];
  // public ..
  return {
    play: function () {
      console.log('Movie/play');
      this.notify('onPlay', this.attributes['title']);
    },
    stop: function () {
      console.log('Movie/stop');
      this.notify('onStop');
    },
    // Get Method
    get: function (attr) {
      console.log('Movie/get');
      return this.attributes[attr];
    },
    // Set Method
    set: function (attr, value) {
      console.log('Movie/set');
      this.attributes[attr] = value;
    },
    // Observer Methods
    addObserver: function (name, func) {
      console.log('Movie/addObserver');
      observers.push({name: name, func: func});
    },
    removeObserver: function (observer) {
      console.log('Movie/removeObserver');
      observers.slice(observer);
    },
    notify: function (obs, param) {
      console.log('Movie/notify');
      observers.forEach(function(observer) {
        if (obs === observer.name) {
         return observer.func(param);
        }
      });
    },
    // Add an Actor
    addAnActor: function(actor) {
      console.log('Movie/setActors');
      this.attributes.actors.push(actor);
    },
    // Get Actors
    getActors: function() {
      console.log('Movie/getActors');
      this.attributes.actors.forEach(function(actor){
        console.log(actor.get('name'));
      });
    }
  };
})();

// Add Observers ..
Movie.prototype.addObserver('onPlay', function(title) {
  console.log('Playing ' + title + ' ...');
  // console.log(Movie.attributes);
});

Movie.prototype.addObserver('onStop', function() {
  console.log('Stoped');
});

// Create instance of Movie
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
extend(Movie.prototype, DownloadMovie);

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
extend(Movie.prototype, MixinSocial);

// Create instance of Movie
var ironman2 = new Movie();
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

// Create instance of Movie
var bttf = new Movie();
bttf.set('title', 'Back to the Future');

// Create instance of Actor
var fox = Object.create(Actor);
fox.set('name', 'Michael j Fox');

// Add actor to Movie instance
bttf.addAnActor(fox);
bttf.getActors();