// const arr = ["python", "ruby", "java", "jango"];

// arr.forEach((ele)=>{
//     // console.log(ele + ".name");
// })
// arr.forEach((item, index, arr)=>{
//     console.log(item , index, arr);
// })


// const arr2 = [1,2,3,4,5];
// arr2.forEach((item)=>{
//     console.log(item*2);
// })



//higher order functions
// const radius = [2,4,6,8];

// function area(radius){
//     return 3.14*radius*radius;
// }

// function circumfrence(radius){
//     return 2*3.14*radius;
// }

// function diameter(radius){
//     return 2*radius;
// }


// function logic(radius, log){
//     const obj = [];
//     for(let i=0;i<radius.length;i++){
//         obj.push(log(radius[i]));
//     }
//     console.log(obj);
// }

// logic(radius, diameter);

//array of objects

const arr = [
    {
        language : "python",
        languageFileName: "py"
    },
    {
        language : "java",
        languageFileName: "java"
    },
    {
        language : "javascript",
        languageFileName: "js"
    },
    {
        language : "cPlusPlus",
        languageFileName: "cpp"
    }
]

arr.forEach((item)=>{
    console.log(item.language);
    console.log(item.languageFileName)
})