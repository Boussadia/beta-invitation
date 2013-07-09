define([
'underscore',
'backbone'
],function(_, Backbone){
	
		var Prospect = Backbone.Model.extend({
			default: {
				mail: "mail@mail.com"
			},
				
		}); // End Prospect Model
		
		return Prospect;
		
	} // End Function
	
); // End Define