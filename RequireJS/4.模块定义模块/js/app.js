requirejs.config({

});

requirejs(['shirt'],function (shirt) {
	console.info(shirt.result());
	console.info(shirt.result2("ppppp"));
});