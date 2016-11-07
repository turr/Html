require.config({
    paths : {
        "jquery" :["http://code.jquery.com/jquery-2.1.4.min","jquery-2.1.4.min"],
        "a"  : "a",
        "b"  : "b",
        "c"  : "c",
        "e"  : "e"

    },
    shim: {
	    c: { 
	    	init: function() {
		        return {
		          hello1: hello1,
		          hello2: hello2
		        }
		    }
	    },
	    e:{
	    	exports : "_"
	    }
	}
});
//require(["jquery"],function(jq){
//	$("#input1").val("初始JQ加载成功");
//});
//require(["a","b"],function(module_a,module_b){
//  alert(module_b.add(1,1));	  
//  alert(module_b.jian(10,1));	  
//  
//  module_a.airlineCodeInit(null,"FM",10,10);
//  module_a.airlineCodeInit(null,"FM",10,10);
//	module_a.airlineCodeInit(null,"AA",20,20);
//	module_a.airlineCodeInit("共产党","FM",33,22);
//	module_a.airlineCodeInit("共产党","FM",3,22);
//	module_a.airlineCodeInit("共产党","FM",1,100);
//	module_a.airlineCodeInit("A1A2 啊国美","AA",2,33);
//	module_a.airlineCodeInit("A1A2 啊国美","AA",66,53);
//	module_a.airlineCodeInit(null,"BB",55,2000);
//	module_a.airlineCodeInit("CC12","CC",73,2000);
//	module_a.airlineCodeInit(null,"CC",63,2000);
//  alert(module_a.airlineCodeArr);	  
// 
//});
//require(["c"],function(module_c){
//	module_c.hello1();
//	module_c.hello2();
//});
//
//require(["d"],function(module_d){
//	module_d.change();
//	module_d.b_click();
//});

require(["e"], function(_){
	alert(_);

})