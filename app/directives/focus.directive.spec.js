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
            '<input id="name" name="name" ng-class="{focus:focused}" type="text" ng-focus="focused=true"  cn-focus />'
        );

        $compile(createdElement)($rootScope);

    }));

    xit('tag should contain the directive', function () {
        $rootScope.$digest();
        expect(createdElement[0].InnerHtml).toContain("cn-focus");
    });

    xit('should get focus when initialized', function() {
        var scope = createdElement.scope();

        $rootScope.$digest();
        expect(1).toEqual(1);


    });
});
