ActionController = function(){
	var _this = ActionController;
	
	_this.prototype.get_message = function(mode){
		//TODO
	};
};

action_controller = new ActionController();

Meteor.methods({
	get_message: function(mode){
		adapt_context(mode);
		action_controller.get_message(mode);
		deactivate_context(mode);
	}
});
