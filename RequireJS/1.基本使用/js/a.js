define(function (){
　　　　 var airlineCodeArr = ",";
		var airlineCodeInit = function(airlineName, airlineCode, PTC_BAS_FAR, TOT_FAR){
			if (airlineName == null) {//航空公司名称为null时以航空公司代码代替
            	airlineName = airlineCode;
        	}
	        if (this.airlineCodeArr.indexOf("_" + airlineCode + "_") == -1) {
	            this.airlineCodeArr += airlineName + "_" + airlineCode + "_" + PTC_BAS_FAR + "_" + TOT_FAR + ","
	        } else {
	            var airLineDataReg = ",[a-zA-Z0-9\u4e00-\u9fa5| ]+?_" + airlineCode + "\\S+?,";
	            var code_tmp = this.airlineCodeArr.match(airLineDataReg)[0].replace(/,/g, "").split("_");//匹配数组中的航空拼接字符串,并分割
	            if (code_tmp[0] === code_tmp[1] && code_tmp[0] !== airlineName) {//未设置全称的航空公司需要判断
	                this.airlineCodeArr = this.airlineCodeArr.replace("," + code_tmp[0] + "_" + code_tmp[1], "," + airlineName + "_" + code_tmp[1]);
	            }
	            var cur_code_min_price = parseInt(code_tmp[2], 10);
	            if (cur_code_min_price > PTC_BAS_FAR) {
	                this.airlineCodeArr = this.airlineCodeArr.replace(airlineCode + "_" + code_tmp[2] + "_" + code_tmp[3], airlineCode + "_" + PTC_BAS_FAR + "_" + TOT_FAR);
	            }
	        }
		};
		return {
　　　　　　airlineCodeArr: airlineCodeArr,
　　　　　　airlineCodeInit: airlineCodeInit
　　　　};
});



//
//var a = {
//	 airlineCodeArr: ",",
//	 airlineCodeInit: function (airlineName, airlineCode, PTC_BAS_FAR, TOT_FAR) {
//      if (airlineName == null) {//航空公司名称为null时以航空公司代码代替
//          airlineName = airlineCode;
//      }
//      if (a.airlineCodeArr.indexOf("_" + airlineCode + "_") == -1) {
//          a.airlineCodeArr += airlineName + "_" + airlineCode + "_" + PTC_BAS_FAR + "_" + TOT_FAR + ","
//      } else {
//          var airLineDataReg = ",[a-zA-Z0-9\u4e00-\u9fa5| ]+?_" + airlineCode + "\\S+?,";
//          var code_tmp = a.airlineCodeArr.match(airLineDataReg)[0].replace(/,/g, "").split("_");//匹配数组中的航空拼接字符串,并分割
//          if (code_tmp[0] === code_tmp[1] && code_tmp[0] !== airlineName) {//未设置全称的航空公司需要判断
//              a.airlineCodeArr = a.airlineCodeArr.replace("," + code_tmp[0] + "_" + code_tmp[1], "," + airlineName + "_" + code_tmp[1]);
//          }
//          var cur_code_min_price = parseInt(code_tmp[2], 10);
//          if (cur_code_min_price > PTC_BAS_FAR) {
//              a.airlineCodeArr = a.airlineCodeArr.replace(airlineCode + "_" + code_tmp[2] + "_" + code_tmp[3], airlineCode + "_" + PTC_BAS_FAR + "_" + TOT_FAR);
//          }
//      }
//  }
//}
//
//a.airlineCodeInit(null,"FM",10,10);
//a.airlineCodeInit(null,"AA",20,20);
//a.airlineCodeInit("共产党","FM",33,22);
//a.airlineCodeInit("共产党","FM",3,22);
//a.airlineCodeInit("共产党","FM",1,100);
//a.airlineCodeInit("A1A2 啊国美","AA",2,33);
//a.airlineCodeInit("A1A2 啊国美","AA",66,53);
//a.airlineCodeInit(null,"BB",55,2000);
//a.airlineCodeInit("CC12","CC",73,2000);
//a.airlineCodeInit(null,"CC",63,2000);

