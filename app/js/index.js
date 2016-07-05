/**
 * "use strict";
 * @param  {[type]} ){	var self          [description]
 * @return {[type]}         [description]
 */
angular.module('notesApp',[]).controller('mainCtrl',[function(){
	var self=this;
	self.submit=function(){
		console.info(self.user)
	}
}]);