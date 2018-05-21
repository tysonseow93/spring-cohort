//abstract classes are similar to interfaces however they are
//more flexible
//you can not create a new instance of an abstract class
//classes in typescript
abstract class Cellphone {
    private battery: string = "none";
    screen;
    case;
    camera;


    call(phoneNumber: string): void {
        return undefined;
    }

    setBattery(battery){
        this.battery = battery;
    }

}

//extending classes in typeScript examples


class SmartPhone extends Cellphone{
    browseTheWeb(url:string) {}
}

class DumbPhone extends Cellphone{
    keys: Array<string>;
}

//you can not create a new instance of an abstract class
//let cell = new Cellphone()

let smart = new SmartPhone();
smart.browseTheWeb("www.url.com");

let dumb = new DumbPhone();
dumb.setBattery("battery");
