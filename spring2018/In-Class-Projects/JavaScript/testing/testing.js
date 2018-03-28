
QUnit.test("hellotest", function (assert) {
    assert.ok(isInRange(44), true, "Passed!");
});

function isInRange(number){
    if(number > 0 && number < 21){
        return true
    }else{
        return false
    }
}

function isLength(string) {
    if(string.length > 4){
        return true
    }else{
        return false
    }
}




console.log(isInRange(14));
console.log(isInRange(4));
console.log(isInRange(44));
console.log(isLength("Yay! Tuesday"));
console.log(isLength("it is time"));
console.log(isLength("Bob"));

