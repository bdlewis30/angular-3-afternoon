angular.module('swagShop').component('swag', {
    templateUrl: 'app/swag/swag.template.html',
    controllerAs: 'swagCtrl',
    bindings: {
        item: '<', // Object
        action: '&', // function
        actionLabel: '@' // string
    } 
})