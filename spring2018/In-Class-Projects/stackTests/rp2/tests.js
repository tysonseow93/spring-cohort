describe('reverse polish', () => {
  let reversePolish;

  beforeEach(() => {
    reversePolish = new ReversePolish();
  });

  it('should calculate 20 for the input \'4 5 *\'', () => {
    let rpnString = '4 5 *';
    let result = reversePolish.calculate(rpnString);
    expect(result).toEqual(20);
  });
  // it('should calculate 45 for the input \'3 5 10 + *\'', () => {
  //   let rpnString = '3 5 10 + *';
  //   let result = reversePolish.calculate(rpnString);
  //   expect(result).toEqual(45);
  // });
  // it('should return 5 for the input \'15 7 1 1 + - / 3 * 2 1 1 + + -\'', () => {
  //   let rpnString = '15 7 1 1 + - / 3 * 2 1 1 + + -';
  //   let result = reversePolish.calculate(rpnString);
  //   expect(result).toEqual(5);
  // });
});