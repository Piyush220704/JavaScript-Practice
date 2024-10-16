// const arr = ["python", "ruby", "java", "jango"];
// const value = arr.filter((item)=>{
//     return item!="ruby";
// })
// console.log(value);

const nums = [1,2,3,4,5,6,7,8,9,10];

// const num = nums.filter((item)=> item>5)

// console.log(num);

// const myNum = nums.map((num)=>num+10)
// console.log(myNum);
//chaining
// const myNum = nums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>50); //whatever result is made in first map function will be applied to second map
// console.log(myNum);

//reduce function
// let sum = 0;
const myNum = nums.reduce((acc, curr)=>{
    acc=acc+curr;
    return acc;
},1)
console.log(myNum);
