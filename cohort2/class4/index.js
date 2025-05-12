
// function populateDiv(){
//     const nodeList = document.querySelectorAll('input');
//     const array = Array.from(nodeList);
//     const firstNumber = array[0].value;
//     const secondNumber = array[1].value;
//     const finalResult = document.getElementById('finalResult');
//     const result = parseInt(firstNumber) + secondNumber;
//     finalResult.innerHTML = `the sum of ${firstNumber} and ${secondNumber} is ${result}`;
// }

//Concept of debouncing and throttling
let timeout;
function debouncedPopulateDiv(){
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        populateDiv();
    }, 100);
}



async function populateDiv(){
    const nodeList = document.querySelectorAll('input');
    const array = Array.from(nodeList);
    const firstNumber = array[0].value;
    const secondNumber = array[1].value;
    // fetch(`http://localhost:3000/sum?a=${firstNumber}&b=${secondNumber}`).then((res)=>{
    //     res.json().then((data)=>{
    //         const finalResult = document.getElementById('finalResult');
    //         finalResult.innerHTML = `the sum of ${firstNumber} and ${secondNumber} is ${data}`;
    //     })
    // })
    const ans = await fetch(`http://localhost:3000/sum?a=${firstNumber}&b=${secondNumber}`);
    const data = await ans.text();
    const finalResult = document.getElementById('finalResult');
    finalResult.innerHTML = `the sum of ${firstNumber} and ${secondNumber} is ${data}`;
}


































// function populateDiv(){
    // const para = document.createElement('p');
    // para.innerHTML = "hello world";
    // const btn = document.getElementById('btn');
    // const finalResult = document.getElementById('finalResult');
    // finalResult.appendChild(para);
// }