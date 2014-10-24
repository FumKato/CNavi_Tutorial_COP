CNaviTutorialView = function(){
	var _this = CNaviTutorialView;
	
	_this.prototype.show_alert = function(){
		alert('Hello World!');
	};
	
	_this.prototype.change_color = function(){
		$('body').css('background', '#FFF');
		$('body').css('color', '#000');
	};
	
	_this.prototype.render_topic = function(){
		$('#hello').html('Default Mode');
	};
};

cnavi_tutorial_view = new CNaviTutorialView();

