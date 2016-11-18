define(function () {
	var color = "blue";
	var size = "large";
	return {
		color : color,
		size : size,
        result: function() {
            return color +" " +size;
        }
    }

});
