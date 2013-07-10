define([
'jquery',
'underscore',
'backbone'
],function($,_, Backbone ){

		var addMail = Backbone.View.extend({
			el: '#addMail',
			events: {
				'submit' : 'submit'
			},
			
			initialize: function(options){
			console.log(options);
				this.collection = options.collection
			},
			
			submit: function(e){
				 e.preventDefault();
				 var newMail =  $(e.currentTarget).find('input[type=text]').val();
				 this.collection.create({
					 'mail': newMail,
					 'is_invited': false
					 });
				 
			}
		});// End addMail
		
		return addMail;
		
	}// End Function

); // End Define