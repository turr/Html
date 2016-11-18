requirejs.config({

});

requirejs(['shirt'],function   (shirt) {
	$("h3[name='shirt_add']").text(shirt.result);
	
});