describe('Focus Directive', function() {
    var createdElement, $rootScope, scope;

    //Get the application ready
    beforeEach(module('app'));
    beforeEach(module('app.common.directives'));

    //Write our specs
    beforeEach(inject(function($compile, _$rootScope_) {
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();

        //Creating an createdElement that will call our directive
        //	Looks the same as when we simply write it in our HTML
        createdElement = angular.element(
            '<input name="firstname" ng-model="person.first" cn-focus  type="text"    />'
        );
        spyOn(createdElement[0],'focus');
        createdElement= $compile(createdElement)(scope);

    }));

    it('tag should contain the directive', function () {
        $rootScope.$apply(function(){
            expect(createdElement.attr("cn-focus")).toBeDefined();
        });
    });

    it('should call focus when initialized', function() {
        expect(createdElement[0].focus).toHaveBeenCalled();
    });
});
