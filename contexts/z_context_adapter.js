if(Meteor.isClient){
	Tracker.autorun(function(){
			morning_mode_context.deactivate('CNaviTutorialView', 'change_color');
			morning_mode_context.deactivate('CNaviTutorialView', 'render_topic');
		switch(Session.get('mode')){
			case 'morning':
				morning_mode_context.adapt('CNaviTutorialView', 'change_color', 'change_color');
				morning_mode_context.adapt('CNaviTutorialView', 'render_topic', 'render_topic');
				morning_mode_context.adapt('CNaviTutorialView', 'render_sentence', 'render_sentence');
				break;
			case 'night':
				night_mode_context.adapt('CNaviTutorialView', 'change_color', 'change_color');
				night_mode_context.adapt('CNaviTutorialView', 'render_topic', 'render_topic');
				morning_mode_context.adapt('CNaviTutorialView', 'render_sentence', 'render_sentence');
				break;
		}
	});
}

if(Meteor.isServer){
	adapt_context = function(mode){
		switch(mode){
			case 'morning':
				morning_mode_context.adapt('ActionController', 'get_message', 'get_message');
				break;
			case 'night':
				night_mode_context.adapt('ActionController', 'get_message', 'get_message');
				break;
		}
	};
	
	deactivate_context = function(mode){
		switch(mode){
			case 'morning':
				morning_mode_context.deactivate('ActionController', 'get_message');
				break;
			case 'night':
				night_mode_context.deactivate('ActionController', 'get_message');
				break;
		}
	};
}
