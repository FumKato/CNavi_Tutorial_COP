CNaviTutorialController = function(){
	var _this = CNaviTutorialController;
	
	_this.prototype.morning_mode_button_clicked = function(){
		Session.set('mode', 'morning');
	};
	
	_this.prototype.night_mode_button_clicked = function(){
		Session.set('mode', 'night');
	};
	
	_this.prototype.default_button_clicked = function(){
		Session.set('mode', 'default');
	};
	
	_this.prototype.execute_button_clicked = function(){
		cnavi_tutorial_view.change_color();
		cnavi_tutorial_view.render_topic();
		cnavi_tutorial_view.show_alert();
	};
};

cnavi_tutorial_controller = new CNaviTutorialController();

$(function(){
	$('#morningMode').click(function(){
		cnavi_tutorial_controller.morning_mode_button_clicked();
	});
	
	$('#nightMode').click(function(){
		cnavi_tutorial_controller.night_mode_button_clicked();
	});
	
	$('#default').click(function(){
		cnavi_tutorial_controller.default_button_clicked();
	});
	
	$('#execute').click(function(){
		cnavi_tutorial_controller.execute_button_clicked();
	});
});
