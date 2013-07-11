define([
'underscore',
'backbone'
],function(_, Backbone){
	
		var Prospect = Backbone.Model.extend({
			default: {
				mail: "mail@mail.com",
				is_invited: false	
			},
			initialize: function(attributes, options){
				this.on('invalid', function(model, error, options){
					var collection = model.collection;
					alert(error);
					collection.remove(model);
				})
			},
			validate: function (attrs){
				var mail = attrs.mail;
				var mail_validator = /\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i;
				if (!mail_validator.test(mail) )
				{
					return "Ce n'est pas une addresse mail valide"
				}
				
			}
		}); // End Prospect Model
	
		return Prospect;
		
	} // End Function
	
); // End Define