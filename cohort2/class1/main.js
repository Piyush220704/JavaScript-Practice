// let a = 0;
// console.time("Loop");
// for (let i = 0; i < 1e10; i++) {
//   a += 1;
// }
// console.timeEnd("Loop");
// console.log(a);


// function sum(a, b){
//     let result = a+b;
//     return result;
// }

// function displayRes(data){
//     console.log("the result is " + data);
// }

// function displayResult(data){
//     console.log("the sums result is "+ data);
// }

// const ans = displayResult(sum(10, 20));


// function sum(a, b, fnToCall){
//     let result = a+b;
//     return fnToCall(result);
// }

// function displayRes(data){
//     console.log("the result is " + data);
// }

// function displayResult(data){
//     console.log("the sums result is "+ data);
// }

// const ans = sum(20, 40, displayResult); //the concepts of callback


// function calculate(num1, num2, fun){
//     //  if(operator == "sum"){
//     //      return sum(num1, num2);
//     //  }
//     //  if(operator == "sub"){
//     //      return sub(num1, num2);
//     //  }
//     return fun(num1, num2);
// }

// function sum(a,b, c){
//     return a+b+c;
// }
// function sub(a,b){ 
//     return a-b;
// }

// const value = calculate(10,20, sum);
// console.log(value);



// const start = process.hrtime(); // High-resolution time before setTimeout

// setTimeout(() => {
//     const diff = process.hrtime(start); // Get the difference
//     const elapsedTime = diff[0] * 1e3 + diff[1] / 1e6; // Convert to milliseconds
//     console.log(`Expected delay: 1000ms`);
//     console.log(`Actual delay: ${elapsedTime.toFixed(3)}ms`);
// }, 1000);

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    console.clear();
    console.log(`${hours}:${minutes}:${seconds}`); // Green color output
}

setInterval(updateClock, 1000); // Update every second
updateClock();
