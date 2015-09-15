describe('Checkout Controller', function() {
    'use strict';

    beforeEach(module('app'));
    beforeEach(module('app.services'));

    describe('Defaults', function(){
        var scope, ctrl, $httpBackend;
        var productsArray = [
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

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('data/products.json').
                respond(productsArray);

            scope = $rootScope.$new();

            ctrl = $controller('CheckoutController', {$scope: scope});
            scope.checkout = ctrl;
        }));


        it('should create "items" model with 4 products', function() {
            expect(scope.checkout.items).toBe([]);
            $httpBackend.flush();

            expect(scope.checkout.items).toBe(
                [productsArray]);
        });


        it('should set the default value of quantity to zero', function() {
            expect(scope.checkout.items[0].quantity).toBe(0);
        });
    });



});

