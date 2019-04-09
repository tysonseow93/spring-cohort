import { TestBed, async, inject } from '@angular/core/testing';
import { MathUtilsComponent } from './math-utils.component';
import { FormsModule } from '@angular/forms';
import { MathUtilService } from '../../services/MathUtil.service';
import { MockMathUtilService } from '../../../mocks/MathUtils.service.mock';

describe('Math utils Component', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MathUtilsComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        MathUtilService,
        MockMathUtilService
      ]
    }).compileComponents();
    // compileComponents compiles all the components so they are ready to be created as needed
  }));

  it('should create the Math Utils Component', async(() => {
    const fixture = TestBed.createComponent(MathUtilsComponent);
    const mathUtils = fixture.debugElement.componentInstance;
    expect(mathUtils).toBeTruthy();
  }));

  // Standard Matcher Example
  it('should accurately add two numbers together', async(() => {
    // Create the compiled component pertinant to our test
    const fixture = TestBed.createComponent(MathUtilsComponent);

    // Get an instance of the MathUtilsService
    const mathUtilsService = fixture.debugElement.injector.get(MathUtilService);

    // Declare two numbers that can only reach a third number when added.
    let numberOne = 10;
    let numberTwo = 1;
    let numberThree = 11;

    // Call the add method on the mathUtilsComponent, and see that the final result returns
    expect(mathUtilsService.add(numberOne, numberTwo)).toEqual(numberThree);
  }));


  // Spy Example
  it('should have called the MathUtilsService when MathUtils.add is called', async(() => {
    // Create the compiled component pertinant to our test
    const fixture = TestBed.createComponent(MathUtilsComponent);

    // Get an instance of the MathUtilsComponent
    const mathUtils = fixture.debugElement.componentInstance;

    // Get an instance of the MathUtilsService
    const mathUtilsService = fixture.debugElement.injector.get(MathUtilService);

    // Set up a spy on the Math Utils Service so we can monitor if it is being called properly
    spyOn(mathUtilsService, 'add');

    // Call the add method on the mathUtilsComponent, which should in turn call the MathUtilsService.add() method
    mathUtils.add(10,10);

    // Check to see if the Service has been called
    expect(mathUtilsService.add).toHaveBeenCalled();

  }));

  // Spy Return Value Example
  it('should correctly assign the returned value to the addedValue variable', async(() => {
    // Create the compiled component pertinant to our test
    const fixture = TestBed.createComponent(MathUtilsComponent);

    // Get an instance of the MathUtilsComponent
    const mathUtils = fixture.debugElement.componentInstance;

    // Get an instance of the MathUtilsService
    const mathUtilsService = fixture.debugElement.injector.get(MathUtilService);

    // Declare set Number that will be the return value no matter what.
    let numberToReturn = 11;

    // Set up a spy on the Math Utils Service so we can monitor if it is being called properly
    spyOn(mathUtilsService, 'add').and.returnValue(numberToReturn);

    // Call the add method on the mathUtilsComponent, which should in turn call the MathUtilsService.add() method
    mathUtils.add(0,0);

    // Check that the mathUtilsComponent is correctly assigning the returned value to the right variable
    expect(mathUtils.addedValue).toEqual(numberToReturn);
  }));

  // Custom Matcher Example
  // https://jasmine.github.io/2.8/custom_matcher.html
});
