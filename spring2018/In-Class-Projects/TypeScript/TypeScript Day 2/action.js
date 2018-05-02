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
        address: '123 main st.',
        rooms: 5,
        baths: 3,
        sqft: 2400,
        available: true,
        dwellingType: DwellingType.TwoStory
    },
    {
        address: '380 main st.',
        rooms: 4,
        baths: 1,
        sqft: 1600,
        available: false,
        dwellingType: DwellingType.Rambler
    },
    {
        address: '45 cape st.',
        rooms: 3,
        baths: 2,
        sqft: 1500,
        available: true,
        dwellingType: DwellingType.Duplex
    }
];
function getAllHomes() {
    return homes;
}
function logFirstAvailable() {
    var availableHomes = homes.filter(function (home) { return home.available; });
    console.log(homes.filter(function (home) { return home.available; })[0]);
    console.log("Homes Available: " + availableHomes.length);
}
function getHouseByTypeOfDwelling(dwellingType) {
    var addresses = homes
        .filter(function (home) { return home.dwellingType === dwellingType; })
        .map(function (home) { return home.address; });
    return addresses;
}
var allHomes = getAllHomes();
logFirstAvailable();
console.log(allHomes);
getHouseByTypeOfDwelling(DwellingType.Rambler).forEach();
