define(['jquery'],function (){
　　　　var change = function (){
			$("#input1").val("d.js JQ加载成功");
　　　　};
		var b_click = function (){
			$("#button1").click(function(){
				alert(1);
			});	
　　　　};
　　　　return {
　　　　　　 change: change,
		    b_click:b_click
　　　　};
		
});