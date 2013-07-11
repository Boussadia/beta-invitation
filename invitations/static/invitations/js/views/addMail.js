define([
	'jquery',
	'underscore',
	'backbone'
],function($,_, Backbone ){
	
	var AddMail = Backbone.View.extend({
		el: '#addMail',
		events: {
			'click #submit' : 'submit'
		},
		initialize: function(options){
			this.collection = options.collection
		},
		submit: function(e){
			e.preventDefault();
			var newMail =  this.$el.find('input[type=text]').val();
			
			this.collection.create({
				'mail': newMail,
				'is_invited': false
			});
		}
	});// End addMail
	
	return AddMail;
		
}// End Function

); // End Define
