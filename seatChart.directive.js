
angular.module('myApp').directive('seatChart', ['$document', function($document) {
  return {
    
    controller : ['$scope', function ($scope) {
      
      
     var startX = 0, startY = 0, x = 0, y = 0;
     var currentSeat;

     $scope.addSeat = function() {

      var seatName = document.getElementById("myText").value;


        var seatChart = angular.element('#seatChart');
        var seat = angular.element('<div class="seatContainer">' + seatName + '</div>');
        angular.element('#seatChart').append(seat);
        
        seatChart.css({position: 'relative',});
        
        seat.css({
         position: 'absolute',
         display:'blolck',
         border: '1px solid black',
         backgroundColor: 'darkgrey',
         color: '#7386D5',
         cursor: 'pointer',
         width:'70px',
         height:'50px'
        });
        
  
        seat.on('mousedown', function(event) {
          event.preventDefault();
          currentSeat = seat;
          $document.on('mousemove', mousemove);
          $document.on('mouseup', mouseup);
        });
        
      }

      function mousemove(event) {

        var seatChartOffset = angular.element('#seatChart').offset();
        y = event.pageY - seatChartOffset.top;
        x = event.pageX - seatChartOffset.left;
        currentSeat.css({
          top: Math.round(y/10)*10 + 'px',
          left:  Math.round(x/10)*10 + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
      
      
      
    }],
    
    scope: {},
    transclude: true,
    template: '<div id="seatChart"><button ng-click="addSeat()">Add seat</button></div>',
    controllerAs: 'vm',
    replace: true,
    
    link: function(scope, el, attr) {
      
    }
    
  };
}]);
