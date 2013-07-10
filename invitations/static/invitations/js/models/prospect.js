define([
'underscore',
'backbone'
],function(_, Backbone){
	
		var Prospect = Backbone.Model.extend({
			default: {
				mail: "mail@mail.com",
				is_invited: false	
			},
			
		}); // End Prospect Model
	
		return Prospect;
		
	} // End Function
	
); // End Define