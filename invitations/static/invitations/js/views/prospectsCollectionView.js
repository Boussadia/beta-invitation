define([
'jquery',
'underscore',
'backbone',
'views/prospect',
], function ($,_, Backbone, ProspectView){
	// Collection View Creation
	var ProspectsCollectionView =  Backbone.View.extend({
		
		initialize: function(options){
			this.prospectsCollection = options.prospectsCollection;
			
		},
		
		render: function(){
			this.$el.empty() //Make sure $el is empty before using it
			// every prospect passing thru the Loop (each is an underscore function)
			this.prospectsCollection.each(function(propspect){
				var view = new ProspectView({
					prospectModel: prospect
				});
				
				this.$el.append(view.render().el);
			}, this);
			
			return this;
		}
		
	});
	return ProspectsCollectionView;
	}
);