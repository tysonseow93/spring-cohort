enum DwellingType { Rambler, TwoStory, Duplex }

class Home {
    address: string;
    rooms: number;
    baths: number;
    sqft: number;
    available: boolean;
    dwellingType: DwellingType
}

let homes: Array<Home> = [
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

function getAllHomes(): Array<Home> {
    return homes;
}

function logFirstAvailable(): void {
    let availableHomes = homes.filter(home => home.available);
    console.log(availableHomes[0]);
    console.log(`Homes Available: ${availableHomes.length}`);
}

function getHousesByTypeOfDwelling(dwellingType: DwellingType) {
    let addresses = homes
        .filter(home => home.dwellingType == dwellingType)
        .map(home => home.address);

    return addresses;

}

let allHomes: Array<Home> = getAllHomes();

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
//         uiSelect.someOldMethod();
// examples of type script decorators

// type script decorators exercise

function outName(className: string) {}

@outName
class OutName {
    constructor(){
        console.log(`ran the constructor`)
    }
}

let outname = new OutName();


function readOnly(target: Function, propertyName: string, propertyDescriptor: propertyDescriptor) {

}
