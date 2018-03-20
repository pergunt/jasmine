describe('Computer', function() {
    beforeEach(function() {
       computer.RAM = 2;
    });
    describe('When RAM is incremented', function() {
        it('Should to have a possibility to increase his own RAM', function() {
            expect(computer.addMemory(6)).toEqual(8)
        });
        it('Should to show a current RAM', function() {
            expect(computer.getCurrentMemory).toBeDefined();
            expect(computer.getCurrentMemory).toEqual(2);
        });
        it('Must to reject incrementing slot bigger then 2', function() {
            expect(computer.addMemory(6,8)).toEqual(16);
            expect(computer.addMemory(6,8,6)).toBe(false)
        })
    })
    describe('when installing programs', function() {
        it('must install count of programs', function() {
            expect()
        })
    })
});