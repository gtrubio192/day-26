// $scope && $window are special keywords
// $scope is actually an OBJECT 
angular.module('app.controllers',[]).controller('IncrementButtonCtrl', 
  function($scope, $timeout){
    // will populate in html
    $scope.buttonText = 'Click Me';
    $scope.count = 0;    
    
    $scope.click = function(){
        console.log('Incrementing count' );
        $scope.count++;
        $scope.buttonText = $scope.count + ' Likes';
        if($scope.count === 1)
        {
             $scope.buttonText = $scope.count + ' Like';
        }
        
       

//        $timeout(function() { 
//            console.log('timeout') 
//            $scope.buttonText = 'Click Me';
//            $scope.buttonDisabled = false;
//
//            }, 4000);

//        
//        $scope.startLoading = function(){
//            $scope.buttonText = 'Loading...';
//            $scope.buttonDisabled = true;
//
//            setTimeout(function(){
//                console.log('test');
//                $scope.buttonText = 'Click me';
//                $scope.buttonDisabled = false;
//                $scope.$apply();
//
//            }, 4000);
//        };
//        $scope.startLoading();
        
    };
    
});