/**
 * Created by Luyao on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .service("pageService", pageService);

    function pageService($http) {
        var pageData = [
            {"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
            {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
            {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"}];

        var api = {
            "createPage": createPage,
            "findPageByWebsiteId": findPageByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage

        };
        return api;

        function createPage(websiteId, page) {
            var url = "/api/website/"+websiteId+"/page";
            return $http.post(url,page);
            // page.websiteId = websiteId;
            // pageData.push(page);
        }

        function findPageByWebsiteId(websiteId) {
            var url = "/api/website/"+websiteId+"/page";
            return $http.get(url);
            // var pages = [];
            // for (var u in pageData) {
            //     var page = pageData[u];
            //     if (page.websiteId === websiteId) {
            //         pages.push(page);
            //     }
            // }
            // return pages;
        }

        function findPageById(pageId) {
            var url = "/api/page/"+pageId;
            return $http.get(url);
            // for (var u in pageData) {
            //     var page = pageData[u];
            //     if (page._id === pageId) {
            //         return page;
            //     }
            // }
            // return null;
        }

        function updatePage(pageId, page) {
            var url = "/api/page/"+pageId;
            return $http.put(url,page);
            // var _page = findPageById(pageId);
            // if (_page != null) {
            //     var index = pageData.indexOf(_page);
            //     pageData[index] = page;
            // }
        }

        function deletePage(pageId) {
            var url = "/api/page/"+pageId;
            return $http.delete(url);
            // var _page = findPageById(pageId);
            // if (_page != null) {
            //     var index = pageData.indexOf(_page);
            //     pageData.splice(index, 1);
            // }
        }
    }
})();