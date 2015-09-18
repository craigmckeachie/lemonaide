describe('Route Tests', function(){
    'use strict';
    var $route ,$location, $rootScope, $httpBackend;

    beforeEach(module('app'));
    beforeEach(module('ngRoute'));

    beforeEach(inject(function(_$route_,_$location_, _$rootScope_, _$httpBackend_) {
        $route = _$route_;
        $location = _$location_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        //Makes sure that all of the requests in the expect were made
        //	Throws exception if they are not
        $httpBackend.verifyNoOutstandingExpectation();
        //Makes sure there aren't any requests that need to be flushed
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('checkout route', function() {

        beforeEach(inject(function() {
            $httpBackend.expectGET('checkout/checkout.html')
                .respond(200, 'checkout html');
        }));

        it('should load the checkout page when / is hit', function() {
            $location.path('/');


            //Need to flush the caught call in the $httpBackend for the
            //	location to change
            $httpBackend.flush();

            expect($route.current.controller).toBe('CheckoutController');
        });

        it('should redirect the user to the home page on a bad route', function() {
            $location.path('/non/existent');
            $httpBackend.flush();
            expect($route.current.controller).toBe('CheckoutController');
            expect($route.current.templateUrl).toBe('checkout/checkout.html');
        });

    });

    describe('sales route', function() {

        beforeEach(inject(function() {
            $httpBackend.expectGET('sales/sales.html')
                .respond(200, 'sales html');
        }));

        it('should load the sales page when /sale is hit', function() {
            $location.path('/sales');
            $httpBackend.flush();
            expect($route.current.controller).toBe('SalesController');
        });

    });

    describe('give route', function() {

        beforeEach(inject(function() {
            $httpBackend.expectGET('give/give.html')
                .respond(200, 'give html');
        }));

        it('should load the give page when /give is hit', function() {
            $location.path('/give');
            $httpBackend.flush();
            expect($route.current.controller).toBe('GiveController');
        });

    });

    describe('donars route', function() {

        beforeEach(inject(function() {
            $httpBackend.expectGET('donars/donars.html')
                .respond(200, 'donars html');
        }));

        it('should load the give page when /donar is hit', function() {
            $location.path('/donars');
            $httpBackend.flush();
            expect($route.current.controller).toBe('DonarsRestController');
        });

    });

});
