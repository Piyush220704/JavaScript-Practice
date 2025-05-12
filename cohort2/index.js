// "use strict"
// console.log(this);

// const x = ()=>{
//     const name = "Piyush";
//     console.log(this);
// }
// x();

const obj = {
    a: 10,
    b: function (){
        console.log(this);
        const x = ()=>{
            const name = "Piyush";
            console.log(this);
        }
        x();
    }
}
obj.b();