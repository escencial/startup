define(['Director'], function() {
  this.attributes = [];
  return {
    get: function (attr) {
      return this.attributes[attr];
    },
    set: function (attr, value) {
      this.attributes[attr] = value;
    },
    play: function () {
      console.log('Playing ' + this.get('title') + ' ...');
    },
    stop: function () {
      console.log('Stopped');
    }
  };
});