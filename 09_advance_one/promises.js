// const promise1 = new Promise(function (resolve, reject){
// do an async tast
//db calls, cryptography, network call
//     setTimeout(function(){
//         console.log("async task completed");
//         resolve();
//     },1000)
// })

// promise1.then(function(){
//     console.log("Promise completed")
// })





// new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("Promise 2 completed");
//         res();
//     },1000)
// }).then(()=>{
//     console.log("Promise 2 resolve completed");
// })





// const promise3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res({username: "piyush", password: "1232654"})
//     },1000)
// })

// promise3.then(data=>{
//     console.log("Data received from promise 3:", data);
// })





// const promise4 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let err = true;
//     if (!err) {
//       res({ username: "piyush", password: "123654" });
//     } else {
//       rej("error: something went wrong");
//     }
//   }, 1000);
// });

// promise4
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log(err);
//   }).finally(()=>{
//     console.log("promise completed")
//   })





// const promise5 = new Promise((res, rej) => {
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             res({username: "Piyush", password: "125478"});
//         }else{
//             rej("error: something went wrong");
//         }
//     },1000)
// })

// async function consumingPromise(){
//     try {
//         const res = await promise5;
//         console.log(res);
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumingPromise();







// async function fetchAllUser(){
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
        
//     const data =await res.json();
//     console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchAllUser();

fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(err => console.log(err));
