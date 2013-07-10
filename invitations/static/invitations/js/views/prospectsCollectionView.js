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
			
			this.prospectsCollection.on('add remove', this.render, this);//Loading Collection render on add or remove in THIS context
			
		},
		
		render: function(){
			this.$el.empty() //Make sure $el is empty before using it
			// every prospect passing thru the Loop (each is an underscore function)
			this.prospectsCollection.each(function(prospect){
				var view = new ProspectView({
					prospectModel: prospect
				});
				
				this.$el.append(view.render().el);
			}, this);
			
			return this;
		}//,
		//addMail: function()
		
	});
	return ProspectsCollectionView;
	}
);