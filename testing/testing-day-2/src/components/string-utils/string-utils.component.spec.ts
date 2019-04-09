import { TestBed, async, inject } from '@angular/core/testing';
import { StringUtilsComponent } from "./string-utils.component";
import { FormsModule } from '@angular/forms';
import { StringUtilService } from "../../services/StringUtil.service";



describe('String utils Component', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StringUtilsComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        StringUtilService
      ]
    }).compileComponents();
    // compileComponents compiles all the components so they are ready to be created as needed
  }));

  it('should change lowercase letters to the correct uppercase letters', async( () => {

    // Create the compiled component pertinant to our test
    const fixture = TestBed.createComponent(StringUtilsComponent);
    // Get an instance of the MathUtilsService
    const StringUtilsService = fixture.debugElement.injector.get(StringUtilService);

    let stringToModify = "abcdefghijklmnopqrstuvwxyz";
    let modifiedString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    expect(StringUtilsService.toUppercaseText(stringToModify)).toEqual(modifiedString);

  }));

  it('should change uppercase letters to the correct lowercase letters', async( () => {

    // Create the compiled component pertinant to our test
    const fixture = TestBed.createComponent(StringUtilsComponent);
    // Get an instance of the MathUtilsService
    const StringUtilsService = fixture.debugElement.injector.get(StringUtilService);

    let stringToModify = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let modifiedString = "abcdefghijklmnopqrstuvwxyz";

    expect(StringUtilsService.toLowercaseText(stringToModify)).toEqual(modifiedString);

  }));

  it('should concat two strings', async( () => {

    // Create the compiled component pertinant to our test
    const fixture = TestBed.createComponent(StringUtilsComponent);
    // Get an instance of the MathUtilsService
    const StringUtilsService = fixture.debugElement.injector.get(StringUtilService);

    let stringOne = "ABCDEFGHIJKL";
    let stingTwo = "mnopqrstuvwxyz";
    let stringThree = "ABCDEFGHIJKLmnopqrstuvwxyz";

    expect(StringUtilsService.concatenateTexts(stringOne, stingTwo)).toEqual(stringThree);

  }));

});
