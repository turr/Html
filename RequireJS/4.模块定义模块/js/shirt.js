define(['jquery'],function ($) {

	return {
        result: function(title) {
        	if(typeof(title) !="undefined"){
        		$("h3[name='content']").text("have add title " + title) ;
        	}else{
        		$("h3[name='content']").text("not add title ");
        	}

        },
        result2: function(title) {
        	if(typeof(title) !="undefined"){
        		$("h3[name='content2']").text("have add title " + title) ;
        	}else{
        		$("h3[name='content2']").text("not add title ");
        	}
        }
    }
	
	
});