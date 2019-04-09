
describe("StingUtils", () => {
    describe("capitalize", () => {
        it("should work with a single lowercase sentence", () => {
            expect(StringUtils.capitalize("this is a lowercase sentence.")).toBe("This is a lowercase sentence.")
        })
        it('should handle multiple sentences', () => {
            expect(StringUtils.capitalize("this is a lowercase sentence. this is another lowercase.")).toBe("This is a lowercase sentence. This is another lowercase.")
        });
        it('should handle question marks', () => {
            expect(StringUtils.capitalize("this! is! sparta? ... ah")).toBe("This! Is! Sparta? ... Ah");
        });
    })
})