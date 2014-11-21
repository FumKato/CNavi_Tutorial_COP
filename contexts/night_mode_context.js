if(Meteor.isClient){
	var operations = {
		// Views/cnavi_tutorial_views.js
		change_color: function(){
			$('body').css('background', '#000');
			$('body').css('color', '#FFF');
		},
		
		// Views/cnavi_tutorial_views.js
		render_topic: function(){
			this.proceeds.render_topic();
			$('#hello').html('Night Mode');
		}
	};
	
	night_mode_context = new Context('night', operations);
}

if(Meteor.isServer){
	var operations = {
		// Controller/ActionController.js
		get_message: function(){
			return 'Good Night!';
		}
	};
	
	night_mode_context = new Context('night', operations);
}
