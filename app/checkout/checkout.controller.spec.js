describe('Checkout Controller', function() {
    'use strict';
    var scope, ctrl;

    beforeEach(module('app'));
    beforeEach(module('app.services'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();

        ctrl = $controller('CheckoutController', {$scope: scope});
        scope.checkout = ctrl;
    }));

    it('should exist', function () {
        expect(ctrl).toBeDefined();
    });

    it('should have page title', function () {
        expect(scope.checkout.title).toEqual("Checkout");
    });

    it('should throw error when button clicked', function () {
        expect(scope.checkout.throwError).toThrow();
    });

    describe('When Backend', function(){
        var $httpBackend;

        describe('is up', function () {
            beforeEach(inject(function(_$httpBackend_) {
                $httpBackend = _$httpBackend_;
                $httpBackend.expectGET('app/data/products.json').
                    respond(getProductsArray());

            }));

            it('should load products', function() {
                expect(scope.checkout.items).toEqual([]);

                $httpBackend.flush();

                expect(scope.checkout.items.length).toEqual(4);
                expect(scope.checkout.items).toEqual(
                    getProductsArray());
            });

            it('should set the default value of quantity to zero on an item', function() {
                $httpBackend.flush();
                expect(scope.checkout.items[0].quantity).toEqual(0);
            });

            describe('when removing an item', function () {
                it('there should be one less item', function () {
                    $httpBackend.flush();
                    expect(scope.checkout.items.length).toEqual(4);

                    scope.checkout.remove(0);
                    expect(scope.checkout.items.length).toEqual(3);

                });
            });

            describe('when updating quantities', function () {
                it('total should recalculate', function () {
                    pending("still needs to be implemented");
                });
            });

            afterEach(function() {
                $httpBackend.verifyNoOutstandingExpectation();
            });

        });

        describe('is down', function () {

            beforeEach(inject(function(_$httpBackend_) {
                $httpBackend = _$httpBackend_;
                $httpBackend.expectGET('app/data/products.json').
                    respond(404,"Unable to load products.");

            }));

            it('error message should be set', function () {
                expect(scope.checkout.message).toEqual('');
                $httpBackend.flush();
                expect(scope.checkout.message).toEqual("Unable to load products.");
            });

            afterEach(function() {
                $httpBackend.verifyNoOutstandingExpectation();
            });
        });

        //TODO:
        //update total when quantity changes
    });





    function getProductsArray(){
        return [
            {
                "name": "Large Lemonade",
                "price": 3,
                "quantity": 0
            },
            {
                "name": "Medium Lemonade",
                "price": 2,
                "quantity": 0
            },
            {
                "name": "Health Snack",
                "price": 4,
                "quantity": 0
            },
            {
                "name": "Treat",
                "price": 1,
                "quantity": 0
            }
        ];

    }


});

