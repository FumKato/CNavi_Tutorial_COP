//To start test, 
//1. open two terminal window
//2. execute lkmongod command in one window
//3. change current directory this project and execute laika command in the other one

var assert = require('assert');

suite('Client: CNaviTutorialView', function() {
	test('render_topic: set appropriate topic in default mode', function(done, server, client) {
		client.eval(function() {
			Session.set('mode', 'default');
			cnavi_tutorial_view.render_topic();
			var result = $('#hello').html();
			emit('check', result, 'Default Mode');
			emit('done');
		});
		
		client.on('check', function(target, expect){
			assert.equal(target, expect);
		});
		
		client.once('done', function(){
			done();
		});
	});
	
	test('render_topic: set appropriate topic in morning mode', function(done, server, client) {
		client.eval(function() {
			Session.set('mode', 'morning');
			cnavi_tutorial_view.render_topic();
			var result = $('#hello').html();
			emit('check', result, 'Morning Mode');
			emit('done');
		});
		
		client.on('check', function(target, expect){
			assert.equal(target, expect);
		});
		
		client.once('done', function(){
			done();
		});
	});
	
	test('render_topic: set appropriate topic in night mode', function(done, server, client) {
		client.eval(function() {
			Session.set('mode', 'night');
			cnavi_tutorial_view.render_topic();
			var result = $('#hello').html();
			emit('check', result, 'Night Mode');
			emit('done');
		});
		
		client.on('check', function(target, expect){
			assert.equal(target, expect);
		});
		
		client.once('done', function(){
			done();
		});
	});
	
	test('render_sentence: set appropriate topic in default mode', function(done, server, client) {
		client.eval(function() {
			Session.set('mode', 'default');
			cnavi_tutorial_view.render_sentence();
			var result = $('#sentence').html();
			emit('check', result, 'Default Mode');
			emit('done');
		});
		
		client.on('check', function(target, expect){
			assert.equal(target, expect);
		});
		
		client.once('done', function(){
			done();
		});
	});
	
	test('render_sentence: set appropriate topic in morning mode', function(done, server, client) {
		client.eval(function() {
			Session.set('mode', 'morning');
			cnavi_tutorial_view.render_sentence();
			var result = $('#sentence').html();
			emit('check', result, 'Morning / Night Mode');
			emit('done');
		});
		
		client.on('check', function(target, expect){
			assert.equal(target, expect);
		});
		
		client.once('done', function(){
			done();
		});
	});
	
	test('render_sentence: set appropriate topic in night mode', function(done, server, client) {
		client.eval(function() {
			Session.set('mode', 'night');
			cnavi_tutorial_view.render_sentence();
			var result = $('#sentence').html();
			emit('check', result, 'Morning / Night Mode');
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
