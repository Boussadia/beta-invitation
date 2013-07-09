define([
'underscore',
'backbone',
'collections/prospects',
'text!../../templates/listTemplate.html'
],function(_, Backbone, ProspectCollection, listTemplate ){

		var ProspectView = Backbone.View.extend({
			tagName: 'li',
			className: 'prospects',
			template: _.template(listTemplate),
		
		initialize: function(){
			this.prospectCollection = new ProspectCollection();
			this.prospectCollection.fetch()
		},
		
		render: function() {
			this.$el.html(this.template(this.prospectCollection.toJSON()));
			return this;
		}
		}); // End Prospect View
	
	return ProspectView;
	
	}// End Function
	
);// End Define