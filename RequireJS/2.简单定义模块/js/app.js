requirejs.config({

});


requirejs(['shirt'],function   (shirt) {
	console.info(shirt.color);
	console.info(shirt.size);
	console.info(shirt.result());
});