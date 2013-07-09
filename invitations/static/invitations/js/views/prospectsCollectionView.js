define([
'jquery',
'underscore',
'backbone',
'views/prospect',
], function ($,_, Backbone, ProspectView){
	
	var ProspectsCollectionView =  Backbone.View.extend({
		
		initialize: function(options){
			this.prospectsCollection = options.prospectsCollection;
			
		},
		
		render: function(){
			this.$el.empty()
			
			this.prospectsCollection.each(function(propspect){
				var view = new ProspectView({
					prospectModel: propspect
				});
				
				this.$el.append(view.render().el);
			}, this);
			
			return this;
		}
		
	});
	return ProspectsCollectionView;
	}
);