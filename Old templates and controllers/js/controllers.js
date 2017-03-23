

angular.module('app.controllers',  [])
  
.controller('restaurantsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('foodNowCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('foodCartCtrl', ['$scope', '$stateParams', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
                             
// JSON.stringify();
// JSON.parse();
//x = [{name:'Zinger',price: 45},{name:'Special', price:30}]
//localStorage.setItem('food',JSON.stringify(x));
//x = localStorage.getItem('food');  since we declared x the way we did it is an object array and we can cycle through it normally.
                            

                             
function ($scope, $stateParams, $ionicPopup) {
    
 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Confirm Order',
     template: 'Are you sure that this is what you want?'
   });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };
    
}])
   
.controller('cloudTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('kFCMenuCtrl', ['$scope', '$stateParams', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup) {
//        var cart = [];
    
    $scope.data = {};
//        
    $scope.sendToCart = function( name,  price){
//        cart.push({
//            "name":name,
//            "price":price
//        });
//        for(var i=0; i<cart.length; i++ ){
//            console.log(cart[i]);
//        }
//    }
    
     // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="number" ng-model="data.num">',
    title: 'Enter Quantity',
//    subTitle: 'Please use normal things',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
            console.log($scope.data)
            return $scope.data.num;
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log(res);
  });
//    
    }

}])
 