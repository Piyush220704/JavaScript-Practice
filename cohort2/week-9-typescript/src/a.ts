// let x:number = 1;
// // x = "piyush" if onEmitonError is false it will throw error but build a js file 
// console.log(x);

// function greeting(firstName: string){
//     console.log(`hello ${firstName}`);
// }

// greeting("piyush");
//greeting(1) //this will give error as the argument is not string

// function sum(a: number, b: number):number{
//     return a + b;
// }

// let ans: number = sum(2,3);
// console.log(ans);


// function isLegal(age: number):boolean{
//     if(age>=18){
//         return true;
//     }
//     else return false;
// }

// function sum(a:number, b:number):number{
//     return a+b;
// }

// function returnfunc(fn:(...args:number[])=>number, delay:number, ...args: number[]){
//         setTimeout(()=>{
//             console.log(fn(...args));
//         }, delay)
// }

// returnfunc(sum, 2000, 2 , 3);

// function greet(){
//     console.log("hello");
// }

// function greetaftersec(fn:()=>void, delay:number){
//     setTimeout(() => {
//         fn();
//     }, delay);
// }

// greetaftersec(greet, 2000);

function runafter1s(fn: ()=>void):void{
    setTimeout(fn, 1000)
}
function doSomething():number{
    console.log("hello");
    return 5;
}
console.log(runafter1s(doSomething));

function runafter2s(dn: ()=>number, cb: (result: number)=>void):void{
    setTimeout(()=>{
        const result = dn();
        cb(result);
    },2000)

}
function giveNumber(): number{
    console.log("hello");
    return 5;
}

runafter2s(giveNumber,(value)=>{
    console.log(value);
});

function runafter3sec(dn: ()=>number): Promise<number> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const result = dn();
            resolve(result);
        }, 1000);
    })
}

runafter3sec(giveNumber).then((value)=>{
    console.log(value);
})