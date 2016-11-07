require.config({
	paths: {
		"jquery": "jquery-2.1.4.min",
//		"jquery": "jquery-1.3.2.min",
		"a": "a",
		"b": "b"
	},
	shim: {
//		"jquery": {
//			exports: "$"
//		},
		"a": {
			deps: ["jquery"], //依赖于jquery
			init: function() { //定义方法
				return {
					hello1: A_H1,
					hello2: A_H2
				}
			}
		},
		"b": {
			deps: ["a"],
			init: function() {
				return {
					hello1: B_H1,
					b_click: B_Click
				}
			}
		}　　
	}
});

require(["jquery"], function($) {

	if (jQuery.fn.jquery == "2.1.4") {
		$("p[name='c1']").text("jQuery从1.7后开始支持AMD规范,不需要配置shim,它的模块名是“jquery”。注意“jquery”是固定的，不能写“jQuery”或其它。");
	} else {
		$("p[name='c2']").text("jQuery低於1.7需要配置shim");
	}
	
	

})

require(["a"], function(A_Call) {
	A_Call.hello1();
	A_Call.hello2();
})

require(["b"], function(B_Call) {
	$("p[name='c5']").text(B_Call.hello1());
	B_Call.b_click();
	
  
	
})