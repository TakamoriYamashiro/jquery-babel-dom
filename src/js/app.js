import { Dom } from './Dom.js';

console.log(Dom);

Dom.on(Dom.EVENT_CHANGE_DEVICE_TYPE,function(e,device_type){
	console.log(e);
	console.log(device_type);
});

Dom.on(Dom.EVENT_RESIZE_WINDOW,function(e,width){
	// console.log(e);
	// console.log(width);
});

//custom event
Dom.on("tick",function(e){
	console.log(e);
});

setInterval(function(){
	Dom.trigger('tick');
},3000);

