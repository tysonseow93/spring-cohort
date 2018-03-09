describe('prepend', () => {
  it('should prepend the string hello to world', () => {
    const expected = 'hello world';
    const result = prepend('world');

    expect(result).toEqual(expected);
  });
  it('should prepend the string hello to javascript', () => {
    const expected = 'hello javascript';
    const result = prepend('javascript');

    expect(result).toEqual(expected);
  });
});

describe('evens', () => {
  it('should return and empty array if there are no evens', () => {
    const expected = [];
    const result = evens([1,3,5,7,9,11]);

    expect(result).toEqual(expected);
  });
  it('should return an empty array if the array is empty', () => {
    const expected = [];
    const result = evens([]);

    expect(result).toEqual(expected);
  });
  it('should return the evens from the input array', () => {
    const expected = [2,4,6,8,10];
    const result = evens([1,2,3,4,5,6,7,8,9,10]);

    expect(result).toEqual(expected);
  });
});

describe('search', () => {
  const testNameList = ['Bryce','Ron','Sarah','Brett','Steven','Benjamin','Amado','Weldon','Cortez','Gino','Armand','Brock','Dwight','Gilbert','Darryl','Emery','Odell','Delbert','Numbers','Tommy','Edgar','Von','Les','Lane','Donnell','Rudolf','Loyd','Tom','Augustine','Samual','Florentino','Wilbur','Owen','Booker','Dale','Wallace','Vicenta','Edra','Sulema','Darcey','Asia','Katlyn','Natosha','Charlette','Annamae','Isabel','Lakendra','Tomeka','Ta','Sana','Mariam','Lisa','Aura','Mellisa','Yan','Kathyrn','Kylee','Teresia','Launa','Melba','Ruthie','Hellen','Shoshana','Kimberli','Emelia','Melodee'];

  it('should return all names that have a \'b\' character in them when the search term is \'b\'', () => {
    const expected = ['Bryce','Brett','Benjamin','Brock','Gilbert','Delbert','Numbers','Wilbur','Booker','Isabel','Melba','Kimberli'];
    const result = search(testNameList, 'b');
    
    expect(result).toEqual(expected);
  });
  it('should return all names that have a \'b\' character in them when the search term is \'B\'', () => {
    const expected = ['Bryce','Brett','Benjamin','Brock','Gilbert','Delbert','Numbers','Wilbur','Booker','Isabel','Melba','Kimberli'];
    const result = search(testNameList, 'B');
    
    expect(result).toEqual(expected);
  });
  it('should return all names that have a \'do\' in them when the search term is \'do\'', () => {
    const expected = ['Amado','Weldon','Donnell','Rudolf'];
    const result = search(testNameList, 'do');
    
    expect(result).toEqual(expected);
  });
  it('should return all names that have a \'do\' in them when the search term is \'DO\'', () => {
    const expected = ['Amado','Weldon','Donnell','Rudolf'];
    const result = search(testNameList, 'DO');
    
    expect(result).toEqual(expected);
  });
  it('should return all names that have a \'do\' in them when the search term is \'dO\'', () => {
    const expected = ['Amado','Weldon','Donnell','Rudolf'];
    const result = search(testNameList, 'dO');
    
    expect(result).toEqual(expected);
  });
});

// Pascals Triangle
//     [1]      row 1
//    [1,1]     row 2
//   [1,2,1]    row 3
//  [1,3,3,1]   row 4
// [1,4,6,4,1]  row 5
describe('pascal', () => {
  it('should return 1 if row === 1', () => {
    let expected = 1;
    let row = 1;
    let col = 1;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 1 if for row=2 and col=1', () => {
    let expected = 1;
    let row = 2;
    let col = 1;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 1 if for row=2 and col=2', () => {
    let expected = 1;
    let row = 2;
    let col = 2;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 1 if for row=3 and col=1', () => {
    let expected = 1;
    let row = 3;
    let col = 1;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 1 if for row=2 and col=2', () => {
    let expected = 1;
    let row = 2;
    let col = 2;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 1 if for row=3 and col=1', () => {
    let expected = 1;
    let row = 3;
    let col = 1;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 2 for row=3 and col=2', () => {
    let expected = 2;
    let row = 3;
    let col = 2;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 1 for row=3 and col=3', () => {
    let expected = 1;
    let row = 3;
    let col = 3;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 1 for row=4 and col=1', () => {
    let expected = 1;
    let row = 4;
    let col = 1;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 3 for row=4 and col=2', () => {
    let expected = 3;
    let row = 4;
    let col = 2;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 3 for row=4 and col=3', () => {
    let expected = 3;
    let row = 4;
    let col = 3;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 1 for row=4 and col=4', () => {
    let expected = 1;
    let row = 4;
    let col = 4;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 1 for row=5 and col=1', () => {
    let expected = 1;
    let row = 5;
    let col = 1;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 4 for row=5 and col=2', () => {
    let expected = 4;
    let row = 5;
    let col = 2;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 6 for row=5 and col=3', () => {
    let expected = 6;
    let row = 5;
    let col = 3;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 4 for row=5 and col=4', () => {
    let expected = 4;
    let row = 5;
    let col = 4;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 1 for row=5 and col=5', () => {
    let expected = 1;
    let row = 5;
    let col = 5;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 1 for row=6 and col=1', () => {
    let expected = 1;
    let row = 6;
    let col = 1;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 5 for row=6 and col=2', () => {
    let expected = 5;
    let row = 6;
    let col = 2;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 10 for row=6 and col=3', () => {
    let expected = 10;
    let row = 6;
    let col = 3;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 10 for row=6 and col=4', () => {
    let expected = 10;
    let row = 6;
    let col = 4;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 5 for row=6 and col=5', () => {
    let expected = 5;
    let row = 6;
    let col = 5;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 1 for row=6 and col=6', () => {
    let expected = 1;
    let row = 6;
    let col = 6;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 1 for row=7 and col=1', () => {
    let expected = 1;
    let row = 7;
    let col = 1;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 1 for row=7 and col=2', () => {
    let expected = 6;
    let row = 7;
    let col = 2;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 15 for row=7 and col=3', () => {
    let expected = 15;
    let row = 7;
    let col = 3;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 20 for row=7 and col=4', () => {
    let expected = 20;
    let row = 7;
    let col = 4;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 15 for row=7 and col=5', () => {
    let expected = 15;
    let row = 7;
    let col = 5;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 6 for row=7 and col=6', () => {
    let expected = 6;
    let row = 7;
    let col = 6;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
  it('should return 1 for row=7 and col=7', () => {
    let expected = 1;
    let row = 7;
    let col = 7;

    let result = pascal(row, col);

    expect(result).toEqual(expected);
  });
});

describe('classes', () => {
  describe('Stereo', () => {
    let testStereo;

    beforeEach(() => {
      testStereo = new Stereo('sony', true);
    });

    describe('constructor', () => {
      it('should set the value of brand to the value specified in the constructor', () => {
        expect(testStereo.brand).toEqual('sony');
      });
      it('should set the value of bluetooth to the value specified in the constructor', () => {
        expect(testStereo.bluetooth).toEqual(true);
      });
      it('should set the value of status to false always', () => {
        expect(testStereo.status).toEqual('off');
      });
    });

    describe('pushPowerButton function', () => {
      it('should set the status to \'off\' when called if status is \'on\'', () => {
        testStereo.status = 'on';

        testStereo.pushPowerButton();

        expect(testStereo.status).toEqual('off');
      });
      it('should set the status to \'on\' when called if status is \'off\'', () => {
        testStereo.status = 'off';

        testStereo.pushPowerButton();

        expect(testStereo.status).toEqual('on');
      });
    });
  });

  describe('Vehicle', () => {
    let testVehicle;
    let testStereo;

    beforeEach(() => {
      testStereo = new Stereo('Sony', true);
      testVehicle = new Vehicle('Tesla', 'Roadster', 'Red', testStereo);
    });

    describe('constructor', () => {
      it('should set value of make to the value specified in the constructor', () => {
        expect(testVehicle.make).toEqual('Tesla');
      });
      it('should set value of model to the value specified in the constructor', () => {
        expect(testVehicle.model).toEqual('Roadster');
      });
      it('should set value of color to the value specified in the constructor', () => {
        expect(testVehicle.color).toEqual('Red');
      });
      it('should set value of stereo to the value specified in the constructor', () => {
        expect(testVehicle.stereo).toEqual(testStereo);
      });
      it('should create a stock stereo if no stero parameter is supplied', () => {
        testVehicle = new Vehicle('Tesla', 'Roadster', 'Red');
        expect(testVehicle.stereo.brand).toEqual('stock');
        expect(testVehicle.stereo.bluetooth).toEqual(false);
      });
    });

    describe('setColor function', () => {
      it('should set value of the color property to the value of the function parameter', () => {
        testVehicle.setColor('Blue');
        expect(testVehicle.color).toEqual('Blue');
      });
    });

    describe('pushStereoPowerButton function', () => {
      it('should call the pushPowerButton() function on the stereo', () => {
        spyOn(testStereo, 'pushPowerButton');
        
        testVehicle.pushStereoPowerButton();

        expect(testStereo.pushPowerButton).toHaveBeenCalled();
      });
      it('should result in the stereo being turned on if it was off', () => {
        testVehicle.stereo.status = 'off'
        testVehicle.pushStereoPowerButton();

        expect(testVehicle.stereo.status).toEqual('on');
      });
      it('should result in the stereo being turned off if it was on', () => {
        testVehicle.stereo.status = 'on'
        testVehicle.pushStereoPowerButton();

        expect(testVehicle.stereo.status).toEqual('off');
      });
    });
  });
});

