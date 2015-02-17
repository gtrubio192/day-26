// $scope && $window are special keywords
// $scope is actually an OBJECT 
app.controller('LoadingButtonCtrl', function($scope, $timeout){
    // will populate in html
    $scope.label = 'Some text';
    $scope.buttonText = 'Click Me';
    $scope.buttonDisabled = false;
    
    $scope.click = function(){
        console.log('Changing button message');
//        $scope.buttonText = 'Click Me';
        $scope.buttonText = 'Loading...';
        $scope.buttonDisabled = true;

        $timeout(function() { 
            console.log('timeout') 
            $scope.buttonText = 'Click Me';
            $scope.buttonDisabled = false;

            }, 4000);

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