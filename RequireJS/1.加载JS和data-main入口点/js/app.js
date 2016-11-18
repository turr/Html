requirejs.config({
	
	//如果data-main有设置,默认baseUrl和 data-main路径一致
	
	//想避开"baseUrl + paths"的解析过程
	//以 ".js" 结束.
	//以 "/" 开始.
	//包含 URL 协议, 如 "http:" or "https:".
	
	
	paths: {
        other_js_p :'../other_js' //data-main的baseUrl为 "/js"
    }
	
});


requirejs(['jquery','other_js_p/app2','/Html_Work/RequireJS/1.加载JS和data-main入口点/app3.js'],
function   () {
	console.info('success');

});