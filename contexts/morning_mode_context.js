if(Meteor.isClient){
	var operations = {
		// Views/cnavi_tutorial_views.js
		change_color: function(){
			$('body').css('background', '#DDDDFF');
			$('body').css('color', '#000077');
		},
		
		// Views/cnavi_tutorial_views.js
		render_topic: function(){
			this.proceeds.render_topic();
			$('#hello').html('Morning Mode');
		},
		
		render_sentence: function(){
			$('#sentence').html('Morning / Night Mode');
		}
		
	};
	
	morning_mode_context = new Context('morning', operations);

}

if(Meteor.isServer){
	var operations = {
		// Controller/ActionController.js
		get_message: function(){
			return 'Good Morning!';
		}
	};
	
	morning_mode_context = new Context('morning', operations);
}
