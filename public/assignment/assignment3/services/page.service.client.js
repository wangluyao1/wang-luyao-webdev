/**
 * Created by Luyao on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .service("pageService",pageService);

    function pageService() {
        var pageData = [
                { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
                { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
                { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }];

        var api = {
            "createPage":createPage,
            "findPageByWebsiteId": findPageByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage

        };
        return api;

        function createPage(websiteId,page) {
            page.websiteId = websiteId;
            pageData.add(page);
        }
        
        function findPageByWebsiteId(websiteId) {
            var pages = [];
            for(var u in pageData){
                var page = pageData[u];
                if(page.websiteId === websiteId){
                    page.add(page);
                }
            }
            return pages;
        }

        function findPageById(pageId){
            for(var u in pageData){
                var page = pageData[u];
                if(page._id === pageId){
                    return page;
                }
            }
            return null;
        }
        
        function updatePage(pageId,page) {
            var _page = findPageById(pageId);
            if(_page != null) {
                var index = pageData.indexOf(_page);
                pageData[index] = page;
            }
        }
        
        function deletePage(pageId) {
            var _page = findPageById(pageId);
            if(_page != null) {
                var index = pageData.indexOf(_page);
                pageData.splice(index,index+1);
            }
        }
    }
})();