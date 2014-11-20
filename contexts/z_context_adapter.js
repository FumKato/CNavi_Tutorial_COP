if(Meteor.isClient){
	Tracker.autorun(function(){
			morning_mode_context.deactivate('CNaviTutorialView', 'show_alert');
			morning_mode_context.deactivate('CNaviTutorialView', 'change_color');
			morning_mode_context.deactivate('CNaviTutorialView', 'render_topic');
		switch(Session.get('mode')){
			case 'morning':
				morning_mode_context.adapt('CNaviTutorialView', 'show_alert', 'show_alert');
				morning_mode_context.adapt('CNaviTutorialView', 'change_color', 'change_color');
				morning_mode_context.adapt('CNaviTutorialView', 'render_topic', 'render_topic');
				morning_mode_context.adapt('CNaviTutorialView', 'render_sentence', 'render_sentence');
				break;
			case 'night':
				night_mode_context.adapt('CNaviTutorialView', 'show_alert', 'show_alert');
				night_mode_context.adapt('CNaviTutorialView', 'change_color', 'change_color');
				night_mode_context.adapt('CNaviTutorialView', 'render_topic', 'render_topic');
				morning_mode_context.adapt('CNaviTutorialView', 'render_sentence', 'render_sentence');
				break;
		}
	});
}
