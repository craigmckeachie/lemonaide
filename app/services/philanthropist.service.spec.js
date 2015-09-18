describe('Philanthropist Service', function () {
    var $httpBackend, PhilanthropistService;

    beforeEach(module('app'));
    
    beforeEach(inject(function(_PhilanthropistService_) {
        PhilanthropistService = _PhilanthropistService_;
    }));

    beforeEach(inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;

    }));

    it('should load when queried', function () {
        $httpBackend.expectGET('http://localhost:3000/philanthropists').
            respond(getPhilanthropistData());

        PhilanthropistService.query().$promise
            .then(function(data){
                    expect(data.length).toEqual(3);
                },
                function(error){
                    throw new Error("failed");
                }
            );

        $httpBackend.flush();

    });

    it('should remove donar', function () {
        $httpBackend.expectDELETE('http://localhost:3000/philanthropists?id=2').
            respond(200);


        PhilanthropistService.remove({id:2}).$promise
            .then(
                function(response){
                    expect(1).toBe(1);
                },
                function(error){
                    throw new Error("failed");
                }
            );
        $httpBackend.flush();
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        //$httpBackend.verifyNoOutstandingRequest();
    });

    function getPhilanthropistData(){
        return [
            {
                "id": 1,
                "name": "Craig McKeachie",
                "email": "craig@funnyant.com",
                "phone": "6142222222",
                "contactMethod": "email"
            },
            {
                "name": "Emily McKeachie",
                "phone": 6143333333,
                "email": "emily@apple.com",
                "contactMethod": "Phone",
                "id": 2
            },
            {
                "name": "John Doe",
                "phone": 6147777777,
                "email": "john.doe@test.com",
                "contactMethod": "Phone",
                "id": 3
            }];
    }

});
