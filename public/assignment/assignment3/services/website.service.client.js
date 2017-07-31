/**
 * Created by Luyao on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .service("websiteService", websiteService);

    function websiteService($http) {
        var websiteData = [
            {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
            {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
            {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
            {"_id": "890", "name": "Go", "developerId": "123", "description": "Lorem"},
            {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
            {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
            {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
        ];

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