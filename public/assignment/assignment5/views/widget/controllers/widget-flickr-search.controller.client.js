/**
 * Created by Luyao on 8/6/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetFlickrSearchController", WidgetFlickrSearchController)

    function WidgetFlickrSearchController($location, $routeParams, FlickrService,widgetService) {
        var model = this;
        model.userId = $routeParams.uid;
        model.websiteId = $routeParams.wid;
        model.pageId = $routeParams.pid;
        model.widgetId = $routeParams["wgid"];

        model.searchPhotos = searchPhotos;
        model.selectPhoto = selectPhoto;

        function init() {

        }

        init();
        
        function searchPhotos(searchTerm) {
            FlickrService
                .searchPhotos(searchTerm)
                .then(function(response) {
                    var data = response.data.replace("jsonFlickrApi(","");
                    data = data.substring(0,data.length - 1);
                    data = JSON.parse(data);
                    model.photos = data.photos;
                });

        }
        
        function selectPhoto(photo) {
                var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server;
                url += "/" + photo.id + "_" + photo.secret + "_b.jpg";
                var newWidget = {_id: model.widgetId,widgetType:"IMAGE",pageId :model.pageId, url: url};
                widgetService
                    .updateWidget(model.widgetId, newWidget)
                    .then(function () {
                        $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page/"
                            + model.pageId + "/widget");
                    });
            }
    }
})();