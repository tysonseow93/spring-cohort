interface Houses {
    address: string;
    rooms: number;
    baths: number;
    sqft: number;
    available: boolean;
    dwellingType: DwellingType;

}

interface HousePersonel {
    name: string;
    phoneNumber: number;
    gender: string;
}