//for loop
// for(let i = 0;i<10;i++){
//     console.log(i);
// }

//break and continue
//break-> will break the loop
//continue-> will skip the current iteration
for(let i = 0;i<10;i++){
    if(i===5){
        continue; //the iteration when i === 5 will skip
    }
    console.log(i);
}

for(let i = 0;i<10;i++){
    if(i===5){
        break; //the loop will break when i===5
    }
    console.log(i);
}