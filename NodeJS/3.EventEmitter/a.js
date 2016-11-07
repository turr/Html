var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
	console.log('3秒后 some_event 事件触发'); 
}); 
setTimeout(function() { 
	event.emit('some_event'); 
}, 3000); 