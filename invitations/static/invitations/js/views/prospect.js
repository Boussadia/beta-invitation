define([
'underscore',
'backbone',
'text!../../templates/itemTemplate.html'
],function(_, Backbone, itemTemplate ){

		var ProspectView = Backbone.View.extend({
			tagName: 'li',
			className: 'prospect',
			template: _.template(itemTemplate),
			events: {
				'click span.mail' : 'Alert',
				'click button.invited' : 'AlertInvited',
				'click button.invite' : 'SendInvite'
				},
				
				
			Alert: function () {
					var mail = this.prospectModel.get('mail');
					alert(mail);	
				},
			AlertInvited: function () {
				alert('Cette personne est déjà invitée');	
			},
			SendInvite: function () {
				//Set the sending invitation function
				this.prospectModel.save({is_invited : true})	
			},
			initialize: function(options){
				this.prospectModel = options.prospectModel;
				
			},
		
			render: function() {
				this.$el.empty(); 
				this.$el.html(this.template(this.prospectModel.toJSON()));
				return this;
			}
		}); // End Prospect View
	
	return ProspectView;
	
	}// End Function
	
);// End Define