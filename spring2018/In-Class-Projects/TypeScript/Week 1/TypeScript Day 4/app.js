var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//abstract classes are similar to interfaces however they are
//more flexible
//you can not create a new instance of an abstract class
//classes in typescript
var Cellphone = /** @class */ (function () {
    function Cellphone() {
        this.battery = "none";
    }
    Cellphone.prototype.call = function (phoneNumber) {
        return undefined;
    };
    Cellphone.prototype.setBattery = function (battery) {
        this.battery = battery;
    };
    return Cellphone;
}());
//extending classes in typeScript examples
var SmartPhone = /** @class */ (function (_super) {
    __extends(SmartPhone, _super);
    function SmartPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmartPhone.prototype.browseTheWeb = function (url) { };
    return SmartPhone;
}(Cellphone));
var DumbPhone = /** @class */ (function (_super) {
    __extends(DumbPhone, _super);
    function DumbPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DumbPhone;
}(Cellphone));
//you can not create a new instance of an abstract class
//let cell = new Cellphone()
var smart = new SmartPhone();
smart.browseTheWeb("www.url.com");
var dumb = new DumbPhone();
dumb.setBattery("battery");
