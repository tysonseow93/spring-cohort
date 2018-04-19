describe('sort', () => {
  it('should sort [2,4,1,3] to [1,2,3,4]', () => {
    let list = [2,4,1,3];
    let expected = [1,2,3,4];
    let result = sort(list);
    
    expect(result).toEqual(expected);
  });
  it('should sort [3,5,6,7,1,2,9] to [1,2,3,5,7,9]', () => {
    let list = [3,5,6,7,1,2,9];
    let expected = [1,2,3,5,6,7,9];
    let result = sort(list);
    
    expect(result).toEqual(expected);
  });
  it('should return an empty list when given an empty list', () => {
    let list = [];
    let expected = [];
    let result = sort(list);
    
    expect(result).toEqual(expected);
  });
  it('should sort [1,3,4,3,1] to [1,1,3,3,4]', () => {
    let list = [1,3,4,3,1];
    let expected = [1,1,3,3,4];
    let result = sort(list);
    
    expect(result).toEqual(expected);
  });
  it('should sort [1,2,3,4] to [1,2,3,4]', () => {
    let list = [1,2,3,4];
    let expected = [1,2,3,4];
    let result = sort(list);
    
    expect(result).toEqual(expected);
  });
});