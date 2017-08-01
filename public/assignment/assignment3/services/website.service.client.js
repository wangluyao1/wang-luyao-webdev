/**
 * Created by Luyao on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .service("websiteService", websiteService);

    function websiteService($http) {

        var api = {
            "createWebsite": createWebsite,
            "findWebsitesByUser": findWebsitesByUser,
            "findWebsiteById": findWebsiteById,
            "updateWebsite": updateWebsite,
            "deleteWebsite": deleteWebsite
        };

        return api;

        function createWebsite(developerId,website) {
            var url = "/api/user/"+ developerId+"/website";
            return $http.post(url,website);
            //websiteData.push(website);
        }

        function findWebsitesByUser(userId) {
            var url = "/api/user/"+ userId+"/website";
            return $http.get(url);
            // var websites = [];
            // for (var u in websiteData) {
            //     var website = websiteData[u];
            //     if (website.developerId === userId) {
            //         websites.push(website);
            //     }
            // }
            // return websites;
        }

        function findWebsiteById(websiteId) {
            var url = "/api/website/"+ websiteId;
            return $http.get(url);
            // for (var u in websiteData) {
            //     var website = websiteData[u];
            //     if (website._id === websiteId) {
            //         return website;
            //     }
            // }
            // return null;
        }

        function updateWebsite(websiteId, website) {
            var url = "/api/website/"+websiteId;
            return $http.put(url,website);
            // var _website = findWebsiteById(websiteId);
            // if (_website != null) {
            //     var index = websiteData.indexOf(_website);
            //     websiteData[index] = website;
            // }
        }

        function deleteWebsite(websiteId) {
            var url = "/api/website/"+websiteId;
            return $http.delete(url);
            // var _website = findWebsiteById(websiteId);
            // console.log(_website);
            // if (_website != null) {
            //     var index = websiteData.indexOf(_website);
            //     websiteData.splice(index, 1);
            // }
        }
    }
})();