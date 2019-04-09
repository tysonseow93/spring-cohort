describe("MathUtils", () => {
	describe("add", () => {
		it("should add 2 numbers", () => {
			expect(MathUtils.add(1,2)).toBe(3);
		});
	});
	describe("average", () => {
        it('should handle 2 numbers', () => {
            expect(MathUtils.average(2,2)).toBe(2);
        });
        it('should handle multiple numbers', () => {
            expect(MathUtils.average(4,3,5,3,2,7)).toBe(4);
		});
        it("should handle decimals", () => {
        	expect(MathUtils.average(2.5, 4.4, 9.6, 8.2, 12.3)).toBe(7.4);
		});
    });

});