/**
 * Created by Luyao on 8/3/2017.
 */
(function () {
    angular
        .module("ExperimentApp",["ngRoute"])
        .config(config)
        .controller("searchController",searchController)
        .controller("detailController",detailController)
        .service("searchService",searchService);

    function config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "search.html",
                controller: "searchController",
                controllerAs: "model"
            })
            .when("/details/:restaurantKey",{
                templateUrl: "detail.html",
                controller: "detailController",
                controllerAs: "model"
        })
    }

    function searchController(searchService) {
        var model = this;

        model.searchRestaurants = searchRestaurants;

        function init(){
        }
        init();

        function searchRestaurants(keyword) {
            searchService.searchWithAddress(keyword)
                .then(function (response) {
                    var result = response.data;
                    console.log(result['restaurants']);
                    model.restaurants = result['restaurants'];
                });
        }
    }
    
    function detailController(searchService,$routeParams) {
        var model = this;
        model.restaurantKey = $routeParams['restaurantKey'];

        function init() {
            searchService.searchWithKey(model.restaurantKey)
                .then(function (response) {
                    console.log(response.data);
                    model.info = response.data;
                });
            searchService.searchMenuWithKey(model.restaurantKey)
                .then(function (response) {
                    console.log(response.data);
                    model.menu = response.data;
                })
        }
        init();
    }
    
    function searchService($http) {
        var api = {"searchWithAddress": searchWithAddress,
            "searchWithKey": searchWithKey,
        "searchMenuWithKey": searchMenuWithKey}

        return api;

        function searchWithAddress(keyword) {
            // var url = "/searchWithAddress/" + keyword;
            // return $http.get(url);
            return $http({
                method: 'GET',
                url: 'https://api.eatstreet.com/publicapi/v1/restaurant/search',
               // headers: {'X-Access-Token': '8c7ffd759fdca452884225aec137a02ae305608170add496'},
                params: {
                    'street-address':keyword,
                    'access-token' : '0267164ded1cc6a1'
                }
            });
        }

        function searchWithKey(restaurantKey) {
            return $http({
                method: 'GET',
                url: 'https://api.eatstreet.com/publicapi/v1/restaurant/'+ restaurantKey,
                params: {
                    'access-token' : '0267164ded1cc6a1',
                    'street-address' : "360 Huntington Ave,Boston,MA"
                }
            });
        }

        function searchMenuWithKey(restaurantKey) {
            return $http({
                method: 'GET',
                url: 'https://api.eatstreet.com/publicapi/v1/restaurant/'+ restaurantKey +'/menu',
                params: {
                    'access-token' : '0267164ded1cc6a1',
                }
            });
        }
}
})();