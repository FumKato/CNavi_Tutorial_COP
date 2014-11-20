if(Meteor.isClient){
	Tracker.autorun(function(){
			morning_mode_context.deactivate('CNaviTutorialView', 'show_alert');
			morning_mode_context.deactivate('CNaviTutorialView', 'change_color');
			morning_mode_context.deactivate('CNaviTutorialView', 'render_topic');
		switch(Session.get('mode')){
			case 'morning':
				//TODO
				break;
			case 'night':
				//TODO
				break;
		}
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
