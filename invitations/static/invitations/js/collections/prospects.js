define([
	'underscore',
	'backbone',
	'../models/prospect',
	'../views/prospect'
], function(_, Backbone, Prospect, ProspectView){
	
		var ProspectsCollection = Backbone.Collection.extend({
			model: Prospect,
			url: "api/prospects/"
		
		}); //End Prospects Collection
		
		return ProspectsCollection;
	
	} // End Function
);// End Define