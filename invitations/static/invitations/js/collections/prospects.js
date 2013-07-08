define([
	'underscore',
	'backbone',
	'models/prospect'
], function(_, Backbone, ProspectModel){
	
		var ProspectsCollection = Backbone.Collection.extend({
			model: ProspectModel,
			url: "api/prospects/"
		
		}); //End Prospects Collection
		
		return ProspectsCollection;
	
	} // End Function
);// End Define