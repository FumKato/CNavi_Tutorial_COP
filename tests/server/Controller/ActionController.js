//To start test, 
//1. open two terminal window
//2. execute lkmongod command in one window
//3. change current directory this project and execute laika command in the other one

var assert = require('assert');

suite('Server: ActionController', function() {
	test('get_message: return appropriate message in default mode', function(done, server, client) {
		server.eval(function() {
			var result = Meteor.call('get_message', 'default');
			emit('check', result, 'Hello World!');
			
			emit('done');
		});
		
		server.on('check', function(target, expect){
			assert.equal(target, expect);
		});
		
		server.once('done', function(){
			done();
		});
	});
	
	test('get_message: return appropriate message in morning mode', function(done, server, client) {
		server.eval(function() {
			var result = Meteor.call('get_message', 'morning');
			emit('check', result, 'Good Morning!');
			
			emit('done');
		});
		
		server.on('check', function(target, expect){
			assert.equal(target, expect);
		});
		
		server.once('done', function(){
			done();
		});
	});
	
	test('get_message: return appropriate message in night mode', function(done, server, client) {
		server.eval(function() {
			var result = Meteor.call('get_message', 'night');
			emit('check', result, 'Good Night!');
			
			emit('done');
		});
		
		server.on('check', function(target, expect){
			assert.equal(target, expect);
		});
		
		server.once('done', function(){
			done();
		});
	});
});
