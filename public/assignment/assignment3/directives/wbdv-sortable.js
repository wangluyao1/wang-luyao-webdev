/**
 * Created by Luyao on 7/30/2017.
 */
(function () {
    angular
       .module("reorder",[])
       .directive('wbdvReorder',reorder);

   function reorder($http,$routeParams) {
       function linkFunction(scope,element) {
           var initial;
           var final;
           $(element).sortable(
               {
                   start: function (event,ui) {
                        initial = ui.item.index();
                   },
                   stop: function (event,ui) {
                         final = ui.item.index();
                       var pageId = $routeParams.pid;
                       var url = "/page/"+ pageId + "/widget?initial="+initial+"&final="+final;
                       return $http.put(url);
                   }

               }
           );
       }
       return{
         link: linkFunction
       };
   }
})();