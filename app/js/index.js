/**
 * "use strict";
 * @param  {[type]} ){	var self          [description]
 * @return {[type]}         [description]
 */
/*angular.module('notesApp',[]).controller('mainCtrl',[function(){
	var self=this;
	self.submit=function(){
		console.info(self.user);
	};
	self.checked='yes';
	self.checkChange=function(){
		console.info(self.checked);
	};
	self.testRadio='2';
	self.mySelected='3';
	self.mySwitch='Kitty';
	self.selectList=[
		{value:'1',key:'11',type:'even'},
		{value:'2',key:'22',type:'odd'},
		{value:'3',key:'33',type:'even'},
	]
}]);*/
angular.module('notesApp',[]).controller('MainCtrl',['$log','$location',function($log,$x){
	var self=this;
	self.printLog=function(){
		$log.log($x);
		$log.info($x.path())
		$log.error('this is error!')
		$log.debug(this)
	};
}]);