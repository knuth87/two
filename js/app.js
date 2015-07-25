var app = angular.module('originStore', []);
app.controller('OriginController', function($timeout) {
  this.url = '';
  this.compares = [];
  this.AddCompare = function() {
    var comp = {
      url:'',
      status:0
    };
    this.compares.push(comp);
  };
  this.DeleteCompare = function(ind) {
    this.compares.splice(ind,1);
  };
  this.SubmitCompare = function() {
    angular.forEach(this.compares, function(val,key) {
      if(val.url != '') { 
        val.status = 1;
        $timeout( function(){val.status = 2;}, 5000);
      }
      else {
        val.status = 0;
      }
    });
  };
});