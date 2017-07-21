/**
 * Created by Luyao on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .service("websiteService",websiteService);

    function websiteService() {
        var websiteData = [
                { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
                { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
                { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
                { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
                { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
                { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
                { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
            ];

        var api = {
            "createWebsite":createWebsite,
            "findWebsitesByUser":findWebsitesByUser,
            "findWebsiteById":findWebsiteById,
            "updateWebsite": updateWebsite,
            "deleteWebsite": deleteWebsite};

        return api;

        function createWebsite(website) {
            websiteData.add(website);
        }

        function findWebsitesByUser(userId) {
            var websites = [];
            for(var u in websiteData){
                var website = websiteData[u];
                if(website.developerId === userId){
                    websites.add(website);
                }
            }
            return websites;
        }

        function findWebsiteById(websiteId) {
            for(var u in websiteData){
                var website = websiteData[u];
                if(website._id === userId){
                    return website;
                }
            }
            return null;
        }

        function updateWebsite(websiteId,website) {
            var _website = findWebsiteById(websiteId);
            if(_website != null) {
                var index = websiteData.indexOf(_website);
                websiteId[index] = website;
            }
        }

        function deleteWebsite(websiteId) {
            var _website = findWebsiteById(websiteId);
            if(_website != null) {
                var index = websiteData.indexOf(_website);
                websiteData.splice(index, index + 1);
            }
        }
    }
})();