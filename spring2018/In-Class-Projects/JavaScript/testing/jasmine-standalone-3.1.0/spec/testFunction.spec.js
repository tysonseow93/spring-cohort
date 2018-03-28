describe('appendWorld function', function() {
    it('should return the string hello world when hello is the parameter',function () {
        var result = appendWorld("hello");
        expect(result).toBe('hello world');
    });
});

describe('evens', function () {
    it('should return an empty array if the parameter is an empty array', function () {
        let result = evens([]);
        expect(result).toEqual([]);
    });
    it('should return an emtpy array if there are no even numbers in the array', function () {
        let result = evens([1,3,5,]);
        expect(result).toEqual([]);
    });
    it('should return even numbers if there are even numbers in the array', function () {
        let result = evens([2,4,6]);
        expect(result).toEqual([2,4,6]);
    });
});

