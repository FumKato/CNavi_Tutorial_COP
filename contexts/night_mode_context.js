var operations = {
	// Views/cnavi_tutorial_views.js
	show_alert: function(){
		$('#greet').html('Good Night!');
	},
	
	// Views/cnavi_tutorial_views.js
	change_color: function(){
		$('body').css('background', '#000');
		$('body').css('color', '#FFF');
	},
	
	// Views/cnavi_tutorial_views.js
	render_topic: function(){
		$('#hello').html('Night Mode');
	}
};

night_mode_context = new Context('night', operations);
