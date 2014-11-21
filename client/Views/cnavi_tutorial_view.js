CNaviTutorialView = function(){
	var _this = CNaviTutorialView;
	
	_this.prototype.show_alert = function(){
		Meteor.call('get_message', Session.get('mode'), function(error, result){
			$('#greet').html(result);
		});
	};
	
	_this.prototype.change_color = function(){
		$('body').css('background', '#FFF');
		$('body').css('color', '#000');
	};
	
	_this.prototype.render_topic = function(){
		var count = $('#count').html();
		count++;
		$('#count').html(count);
		$('#hello').html('Default Mode');
	};
	
	_this.prototype.render_sentence = function(){
		$('#sentence').html('Default Mode');
	};
};

cnavi_tutorial_view = new CNaviTutorialView();

