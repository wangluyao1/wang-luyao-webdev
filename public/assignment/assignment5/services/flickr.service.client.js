/**
 * Created by Luyao on 8/6/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .service("FlickrService", FlickrService);

    var key = "7a765a46b6726a25796923099d11515d";
    var secret = "bb5938007e3de965";
    var urlBase = "https://api.flickr.com/services/rest/" +
        "?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

    function FlickrService($http) {
        var api = {"searchPhotos":searchPhotos};

        return api;

        function searchPhotos(searchTerm) {
         var url = urlBase.replace("API_KEY", key).replace("TEXT", searchTerm);
         return $http.get(url);
        }
    }
})();