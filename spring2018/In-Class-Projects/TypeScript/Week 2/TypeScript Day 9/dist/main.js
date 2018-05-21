var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DwellingType;
(function (DwellingType) {
    DwellingType[DwellingType["Rambler"] = 0] = "Rambler";
    DwellingType[DwellingType["TwoStory"] = 1] = "TwoStory";
    DwellingType[DwellingType["Duplex"] = 2] = "Duplex";
})(DwellingType || (DwellingType = {}));
class Home {
}
let homes = [
    {
        address: '123 main st',
        rooms: 5,
        baths: 2,
        sqft: 1200,
        available: true,
        dwellingType: DwellingType.Duplex
    },
    {
        address: '143 state st',
        rooms: 4,
        baths: 1,
        sqft: 1100,
        available: false,
        dwellingType: DwellingType.Rambler
    },
    {
        address: '3 cape st',
        rooms: 6,
        baths: 3,
        sqft: 2200,
        available: true,
        dwellingType: DwellingType.TwoStory
    }
];
function getAllHomes() {
    return homes;
}
function logFirstAvailable() {
    let availableHomes = homes.filter(home => home.available);
    console.log(availableHomes[0]);
    console.log(`Homes Available: ${availableHomes.length}`);
}
function getHousesByTypeOfDwelling(dwellingType) {
    let addresses = homes
        .filter(home => home.dwellingType == dwellingType)
        .map(home => home.address);
    return addresses;
}
let allHomes = getAllHomes();
console.log(allHomes);
logFirstAvailable();
getHousesByTypeOfDwelling(DwellingType.Rambler)
    .forEach(address => console.log(address));
// examples of type script decorators
//
//         function uiElement(target: Function) {
//             console.log(`creating new ui Elements`);
//
//         }
//         function deprecated(t : any, p : string, d : PropertyDescriptor) {
//             console.log(`this is going away soon`);
//         }
//         function service (type: string){
//             return (target: Function) =>{
//                 if (type === 'FrontEnd'){
//                     console.log(`front ed service created`);
//                 }else if (type === 'BackEnd') {
//                     console.log(`back end service created`);
//                 }
//             }
//         }
//         @service('FrontEnd')
//         class LoggingService {
//             constructor(){}
//         }
//         @uiElement
//         class UISelect {
//             constructor(){
//                 console.log(`ran constructor`);
//             }
//             @deprecated
//             someOldMethod(){
//                 console.log(`ran some old method`);
//             }
//         }
//
//         let log = new LoggingService();
//         let uiSelect = new UISelect();
//            uiSelect.someOldMethod();
// examples of type script decorators
// type script decorators exercise
function outName(target) {
    console.log(`outName Function`);
}
let OutName = class OutName {
    constructor() {
        console.log(`ran the constructor`);
    }
};
OutName = __decorate([
    outName
], OutName);
let outname = new OutName();
//# sourceMappingURL=main.js.map