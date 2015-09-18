describe('Focus Directive', function() {
    var createdElement, $rootScope;

    //Get the application ready
    beforeEach(module('app'));
    beforeEach(module('app.common.directives'));

    //Write our specs
    beforeEach(inject(function($compile, _$rootScope_) {
        $rootScope = _$rootScope_;

        //Creating an createdElement that will call our directive
        //	Looks the same as when we simply write it in our HTML
        createdElement = angular.element(
            '<input  ng-class="{focus:focused}" type="text" ng-focus="focused=true"  cn-focus value="test" />'
        );

        $compile(createdElement)($rootScope);

    }));

    xit('tag should contain the directive', function () {
        $rootScope.$apply(function(){

        });

        expect(createdElement.html()).toContain("cn-focus");

    });

    xit('should get focus when initialized', function() {
        var scope = createdElement.scope();

        $rootScope.$digest();
        expect(1).toEqual(1);


    });
});
