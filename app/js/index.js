
angular.module('notesApp',[]).controller('mainCtrl',[function(){
	var self=this;
	this.person=[{
			name:"tom",
			age:18,
			status:false
		},{
			name:"kitty",
			age:15,
			status:true
		}];
	self.myEvent=function(){
		console.info(arguments);
		console.info(this);
	}
	self.getClassName=function(status){
		return{
			show:status,
			hide:!status,
		}
	}
}]);