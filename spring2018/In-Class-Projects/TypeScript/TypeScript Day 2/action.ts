enum DwellingType { Rambler, TwoStory, Duplex }

class Home{
    address: string;
    rooms: number;
    baths: number;
    sqft: number;
    available: boolean;
    dwellingType: DwellingType;
}

let homes: Array<Home> = [
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

function getAllHomes(): Array<Home> {
    return homes;
}

function logFirstAvailable(): void {
    let availableHomes = homes.filter(home => home.available);
    console.log(homes.filter(home => home.available)[0]);
    console.log(`Homes Available: ${availableHomes.length}`);
}

function getHouseByTypeOfDwelling(dwellingType: DwellingType) {
    let addresses = homes
        .filter(home => home.dwellingType === dwellingType)
        .map(home => home.address);

    return addresses;
}

let allHomes: Array<Home> = getAllHomes();

logFirstAvailable();

console.log(allHomes);

getHouseByTypeOfDwelling(DwellingType.Rambler).forEach();