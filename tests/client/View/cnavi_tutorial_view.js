//To start test, 
//1. open two terminal window
//2. execute lkmongod command in one window
//3. change current directory this project and execute laika command in the other one

var assert = require('assert');

suite('Client: CNaviTutorialView', function() {
	test('render: render buttons on 事件前 phase with audience role', function(done, server, client) {
		client.eval(function() {
			var IDs = setup(1, '事件前');
			var werewolfView = new WerewolfView();
			Session.set('myPlayerID', IDs.audienceID);
			Session.set('villageID', IDs.villageID);
			role = new RolesModel().getRolesByPlayerID(Session.get('myPlayerID'));
			Session.set('myRole', role);
			
		  	werewolfView.flush('lobby');
		  	werewolfView.render('village');
		  	new ActionButtonView().flush();
		  	new VillageView().enableInputs();
		  	
			adapt_context();
			var targetName = '#participate';
			var result = targetName + ': ' + $(targetName).is(':visible');
			var expect = targetName + ': ' + 'true';
			emit('check', result, expect);
			
			targetName = '#extraMenu';
			result = targetName + ': ' + $(targetName).is(':visible');
			expect = targetName + ': ' + 'false';
			emit('check', result, expect);
			
			emit('done');
		});
		
		client.on('check', function(target, expect){
			assert.equal(target, expect);
		});
		
		client.once('done', function(){
			done();
		});
	});
});
