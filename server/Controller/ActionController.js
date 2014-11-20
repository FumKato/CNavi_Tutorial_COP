ActionController = function(){
	var _this = ActionController;
	
	_this.prototype.get_message = function(mode){
		return 'Hello World!';
	};
};

action_controller = new ActionController();

Meteor.methods({
	get_message: function(mode){
		adapt_context(mode);
		var result = action_controller.get_message(mode);
		deactivate_context(mode);
		return result;
	}
});
