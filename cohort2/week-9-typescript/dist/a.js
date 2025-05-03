"use strict";
function runafter1s(fn) {
    setTimeout(fn, 1000);
}
function doSomething() {
    console.log("hello");
    return 5;
}
console.log(runafter1s(doSomething));
function runafter2s(dn, cb) {
    setTimeout(() => {
        const result = dn();
        cb(result);
    }, 2000);
}
function giveNumber() {
    console.log("hello");
    return 5;
}
runafter2s(giveNumber, (value) => {
    console.log(value);
});
function runafter3sec(dn) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = dn();
            resolve(result);
        }, 1000);
    });
}
runafter3sec(giveNumber).then((value) => {
    console.log(value);
});
