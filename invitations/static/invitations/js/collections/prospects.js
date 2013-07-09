define([
	'underscore',
	'backbone',
	'models/prospect',
	'views/prospect'
], function(_, Backbone, ProspectModel, ProspectView){
	
		var ProspectsCollection = Backbone.Collection.extend({
			model: ProspectModel,
			url: "api/prospects/"
		
		}); //End Prospects Collection
		
		return ProspectsCollection;
	
	} // End Function
);// End Define