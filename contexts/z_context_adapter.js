if(Meteor.isClient){
	adapt_context = function(mode){
			morning_mode_context.deactivate('CNaviTutorialView', 'change_color');
			morning_mode_context.deactivate('CNaviTutorialView', 'render_topic');
			morning_mode_context.deactivate('CNaviTutorialView', 'render_sentence');
		switch(Session.get('mode')){
			case 'morning':
				//TODO
				break;
			case 'night':
				//TODO
				break;
		}
		cnavi_tutorial_view.render_topic();
		cnavi_tutorial_view.render_sentence();
	};
	
	Tracker.autorun(function(){
		adapt_context(Session.get('mode'));
	});
}

if(Meteor.isServer){
	adapt_context = function(mode){
		switch(mode){
			case 'morning':
				//TODO
				break;
			case 'night':
				//TODO
				break;
		}
	};
	
	deactivate_context = function(mode){
		switch(mode){
			case 'morning':
				//TODO
				break;
			case 'night':
				//TODO
				break;
		}
	};
}
