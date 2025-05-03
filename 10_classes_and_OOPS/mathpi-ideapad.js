console.log(Math.PI)
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)

// const chai = {
//     name: "ginger Chai",
//     price: 100,
//     isAvailable: true,

//     orderChai: function(){
//         console.log("order the chai")
//     }
// }

//console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false,
// })
//hard coded the values to be false
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

// for (const [key, value] of Object.entries(chai)) {
//     if(typeof value !== 'function'){
//         console.log(`${key}: ${value}`);
//     }
// }

//property decriptor