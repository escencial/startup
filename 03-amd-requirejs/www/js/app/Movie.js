define(['app/Director'], function() {
  var attributes = [];
  return {
    get: function (attr) {
      return attributes[attr];
    },
    set: function (attr, value) {
      attributes[attr] = value;
    },
    play: function () {
      console.log('Playing ' + attributes['title'] + ' ...');
    },
    stop: function () {
      console.log('Stopped');
    }
  };
});