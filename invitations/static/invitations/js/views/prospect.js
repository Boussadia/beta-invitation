define([
'underscore',
'backbone',
'text!../../templates/itemTemplate.html'
],function(_, Backbone, itemTemplate ){

		var ProspectView = Backbone.View.extend({
			tagName: 'li',
			className: 'prospect',
			template: _.template(itemTemplate),
		
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