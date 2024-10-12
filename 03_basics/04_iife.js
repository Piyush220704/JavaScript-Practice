//IIFE -> imediately invoked function expression
(function one(){ //named iife
    console.log("named iife");
})(); //as in js the ; is not necessasry to end the line of code but to explicitly stop the iife we have to use ;
//to reduce pollution from globel scope we use iife function


(function(){
    console.log("unnamed iife")
})();
((name)=>{
    console.log(`hello2, ${name}, this is an arrow iife`);
})("piyush");