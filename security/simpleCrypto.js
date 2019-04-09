var SimpleCrypto = require("simple-crypto-js").default;


// If you would like to generate a random unique key, you may use static function generateRandom() like so
// var _secretKey = SimpleCrypto.generateRandom();
// You may also set the strength of the random key, as example 256 (default is 128);
// var _secretKey = SimpleCrypto.generateRandom(256);
// Or just defined the key by yourself (key is must!)
var _secretKey = "some-unique-key";


var simpleCrypto = new SimpleCrypto("some-unique-key");
simpleCrypto.setSecret("new-more-unique-key");

// var simpleCrypto = new SimpleCrypto(_secretKey);

var plainText = "Hello World!";
var cipherText = simpleCrypto.encrypt(plainText);
console.log("Encryption process...");
console.log("Plain Text    : " + plainText);
console.log("Cipher Text   : " + cipherText);
var decipherText = simpleCrypto.decrypt(cipherText);
console.log("... and then decryption...");
console.log("Decipher Text : " + decipherText);
console.log("... done.");