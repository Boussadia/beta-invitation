define([
	'backbone',
], function(Backbone){
	Router = Backbone.Router.extend({
		routes: {
			'': 'index',
		},
		initialize: function(options){
		},
		index: function(){
		},
	});

	return Router;
});
