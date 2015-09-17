(function () {
    "use strict";

    angular
        .module('app')
        .service('ProductService', ProductService);

    ProductService.$inject = ['$http','$cacheFactory','$q','$log'];

    /* @ngInject */
    function ProductService($http, $cacheFactory, $q, $log) {

        this.list = function(){
            var httpCache = $cacheFactory.get('$http');

            //return usingCacheFactory();
            return usingHttpCache();

        };

        function usingCacheFactory(){
            var dataCache =getLemonCache();
            var deferred = $q.defer();

            var data = dataCache.get('lemon-products');
            if(data){
                $log.log("getting data from cache");
                deferred.resolve({data:data});
            }else{

                $http({
                    method: 'get',
                    url: '/data/products.json'
                }).then(function(response){
                    data = response.data;
                    dataCache.put("lemon-products", data);
                    deferred.resolve({data: data});
                },function(response){
                    deferred.reject({data:"Unable to load products."});
                });

            }

            return deferred.promise;

        }

        function getLemonCache(){
            var dataCache = $cacheFactory.get('lemonCache');
            if(!dataCache){
                dataCache = $cacheFactory('lemonCache');
            }
            return dataCache;
        }

        function deleteLemonProductsFromCache(){
            var dataCache = $cacheFactory.get('lemonCache');
            dataCache.remove('lemon-products');
        }


        function usingHttpCache(){
            return $http({
                method: 'get',
                url: '/data/products.json',
                cache: true
            });
        }


        function deleteHttpCache(url){
            var httpCache = $cacheFactory.get('$http');
            httpCache.remove(url);
        }


    }


})();

