define([
	'jquery',
	'underscore',
	'backbone',
	'router',
	'cookie'
], function($,_ , Backbone, Router ){

	// Applicayion object definition
	function App(){
		// Global Scope
		this.Views = {};
		this.Collections = {};
		this.Models = {};

		// Global event manager
		this.Vent = _.extend({}, Backbone.Events);
	}


	// Method to call in order to start application
	MasterCoursesApp.prototype.initialize = function(){

	}


	// Specific methods for csrf control
	function csrfSafeMethod(method) {
		// these HTTP methods do not require CSRF protection
		return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
	}

	function sameOrigin(url) {
		// test that a given url is a same-origin URL
		// url could be relative or scheme relative or absolute
		var host = document.location.host; // host + port
		var protocol = document.location.protocol;
		var sr_origin = '//' + host;
		var origin = protocol + sr_origin;
		// Allow absolute or scheme relative URLs to same origin
		return (url == origin || url.slice(0, origin.length + 1) == origin + '/') || 
				(url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
				// or any other URL that isn't scheme relative or absolute i.e relative.
				!(/^(\/\/|http:|https:).*/.test(url));
	}
	$.ajaxSetup({
		beforeSend: function(xhr, settings) {
			if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
				var csrftoken = $.cookie('csrftoken');
				// Send the token to same-origin, relative URLs only.
				// Send the token only if the method warrants CSRF protection
				// Using the CSRFToken value acquired earlier
				xhr.setRequestHeader("X-CSRFToken", csrftoken);
			}
		}
	});

	return App;
});
