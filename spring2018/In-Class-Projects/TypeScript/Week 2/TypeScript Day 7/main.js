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
var Home = /** @class */ (function () {
    function Home() {
    }
    return Home;
}());
var homes = [
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
    var availableHomes = homes.filter(function (home) { return home.available; });
    console.log(availableHomes[0]);
    console.log("Homes Available: " + availableHomes.length);
}
function getHousesByTypeOfDwelling(dwellingType) {
    var addresses = homes
        .filter(function (home) { return home.dwellingType == dwellingType; })
        .map(function (home) { return home.address; });
    return addresses;
}
var allHomes = getAllHomes();
console.log(allHomes);
logFirstAvailable();
getHousesByTypeOfDwelling(DwellingType.Rambler)
    .forEach(function (address) { return console.log(address); });
// examples of type script decorators
function uiElement(target) {
    console.log("creating new ui Elements");
}
function deprecated(t, p, d) {
    console.log("this is going away soon");
}
function service(type) {
    return function (target) {
        if (type === 'FrontEnd') {
            console.log("front ed service created");
        }
        else if (type === 'BackEnd') {
            console.log("back end service created");
        }
    };
}
var LoggingService = /** @class */ (function () {
    function LoggingService() {
    }
    LoggingService = __decorate([
        service('FrontEnd')
    ], LoggingService);
    return LoggingService;
}());
var UISelect = /** @class */ (function () {
    function UISelect() {
        console.log("ran constructor");
    }
    UISelect.prototype.someOldMethod = function () {
        console.log("ran some old method");
    };
    __decorate([
        deprecated
    ], UISelect.prototype, "someOldMethod");
    UISelect = __decorate([
        uiElement
    ], UISelect);
    return UISelect;
}());
var log = new LoggingService();
var uiSelect = new UISelect();
uiSelect.someOldMethod();
// examples of type script decorators
// type script decorators exercise
function outName(target) {
    console.log("outName Function");
}
var OutName = /** @class */ (function () {
    function OutName() {
        console.log("ran the constructor");
    }
    OutName = __decorate([
        outName
    ], OutName);
    return OutName;
}());
var outname = new OutName();
