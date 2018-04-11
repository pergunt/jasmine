describe('Computer', () => {
    beforeEach(function() {
       computer.RAM = 2;
       computer.spaceGBs = 1000;
    });
    describe('When RAM is incremented', () => {
        it('Should to have a possibility to increase his own RAM', () => {
            expect(computer.addMemory(6)).toEqual(8)
        });
        it('Should to show a current RAM', () => {
            expect(computer.getRam).toBeDefined();
            expect(computer.getRam).toEqual(2);
        });
        it('Must to reject incrementing slot bigger then 2', () => {
            expect(computer.addMemory(6,8)).toEqual(16);
            expect(computer.addMemory(6,8,6)).toBe(false)
        })
    })
    describe('when installing programs', () => {
		const gta = {
			space: 600,
			installed: false,
			name: 'gta'
		};
		const PS = {
			space: 400,
			installed: false,
			name: 'PS'
		};
		const sublime = {
			space: 1,
			installed: false,
			name: 'sublime'
		};
        it('must to install any count of programs', () => {
            expect(computer.install(gta,PS)).toBe(true);
        });
		it('must to discard installation if not enough space', () => {
			expect(computer.install(gta,PS,sublime)).toBe(false);
		});
    });

    it('posibility for cleaning spaceGBs', () => {
    	computer.install({
			space: 600,
			installed: false,
			name: 'gta'
		});
    	computer.format();
		expect(computer.getCurrentMemory).toEqual(1000)
	})
});