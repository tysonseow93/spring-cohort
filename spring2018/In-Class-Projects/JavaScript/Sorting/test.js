

describe('selectionSort', () => {
    it('should sort the values of an array in acceding order', () => {
        let sort = selectionSort(array1);
        expect(sort).toEqual([1,2,3,4,5,7,8]);
    });
    it('should sort the values of an array in acceding order', () => {
        let sort = selectionSort(array2);
        expect(sort).toEqual([1,2,3,4,5,6,7,9]);
    });
    it('should sort the values of an array in acceding order', () => {
        let sort = selectionSort(array3);
        expect(sort).toEqual([0,1,2,3,4,5,6,7,8,9]);
    });

});