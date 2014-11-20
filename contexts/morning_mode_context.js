var operations = {
	// Views/cnavi_tutorial_views.js
	show_alert: function(){
		$('#greet').html('Good Morning!');
	},
	
	// Views/cnavi_tutorial_views.js
	change_color: function(){
		$('body').css('background', '#DDDDFF');
		$('body').css('color', '#000077');
	},
	
	// Views/cnavi_tutorial_views.js
	render_topic: function(){
		$('#hello').html('Morning Mode');
	},
	
	render_sentence: function(){
		$('#sentence').html('Morning / Night Mode');
	}
	
};

morning_mode_context = new Context('morning', operations);
