(function(){
	require.config({
		paths: {
			'jquery': 'libs/jquery/jquery',
			'jqueryUi': 'libs/jquery/jqueryui',
			'cookie': 'libs/jquery/jquery.cookie',
			'underscore': 'libs/underscore/underscore',
			'backbone': 'libs/backbone/backbone',
		},
		shim: {
			'cookie': {
				deps: ['jquery'],
			},
			'jqueryUi': {
				deps: ['jquery'],
			},
			'backbone': {
				deps: ['underscore', 'jquery'],
				exports: 'Backbone'
			},
			'underscore': {
				exports: '_'
			},
		},
		
	});

	require([
		// Load our app module and pass it to our definition function
		'app',
		], function(App){
		// The "app" dependency is passed in as "App"
		var App = new App();
		App.initialize();
		window.App = App;
	});
})();
