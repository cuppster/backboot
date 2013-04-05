// app.js

var App = Backbone.View.extend({


	render: function() {
	
		//alert('rendered!');
	},
	
	initialize: function() {
	
		console.log('init...');
		var things = new Things();
		things.fetch();
	
	}


});


var Thing = Backbone.Model.extend({

	

});


var Things = Backbone.Collection.extend({

	model: Thing,
	
	url: '/foobar',

});



$(document).ready(function() {

	console.log('setting up mock ajax...');
	
	var server = sinon.fakeServer.create();
	server.autoRespond = true;
	
	//var callback = sinon.spy();
	
	//server.respondWith(function(xhr, id) {
	//
	//	console.log('responding!');
	//});
	
	//server.respondWith([200, {"Content-Type": "application/json"},
    //  '[{"id":123,"title":"Hollywood - Part 2"}]']);
	  
	server.respondWith("GET", "/foobar",
		[200, {"Content-Type": "application/json"},
      '[{"id":123,"title":"Hollywood - Part 2"}]']);


	//var thing = new Thing({id: 123});
	
	//thing.bind('change', callback);
	
	//var result = thing.fetch();
	//console.log(thing)
		
	console.log('creating app...');
	new App({el: 'body'}).render();
	
	//server.respond();

});
 
