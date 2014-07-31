define( function() {
  var properties = {};
  properties['name'] = name;
  properties.quotes = [];


  return {
    get: function (attr) {
		return properties[attr];
    },
    set: function (attr, value) {
		if (value instanceof Array) {
			value.forEach(function (val) {
				properties['quotes'].push(val);
			});
		} else {
			properties[attr] = value;
		}
    },
	speak: function () {
		console.log(properties['name'] + ' says: ');
		$('.quotes').append(properties['name'] + ' says: ');
		properties.quotes.forEach (function (quote){
			console.log(quote);
			$('.quotes').append(quote);
		});
	}
  };

});