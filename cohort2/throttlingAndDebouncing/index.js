const input = document.querySelector('input');
const defaultText = document.getElementById('default');
const debounceText = document.getElementById('debounce');
const throttleText = document.getElementById('throttle');

input.addEventListener("input", e=>{
    defaultText.innerHTML = e.target.value;
    updateDebounceText(e.target.value);
    updateThrottleText(e.target.value);
})


const updateThrottleText = throttle((text)=>{
    throttleText.innerHTML = text;
})

const updateDebounceText = debounce((text)=>{
    debounceText.innerHTML = text;
}) 


function debounce(cb, delay = 1000){
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);

        timeout = setTimeout(()=>{
            cb(...args);
        }, delay);
    }
}

function throttle(cb, delay = 1000){
    let shouldWait = false;
    let waitingArgs;

    const timeoutFunc = ()=>{
        if(waitingArgs == null){
            shouldWait = false;
        }else{
            cb(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunc, delay); 
        }
    }
    return (...args)=>{
        if(shouldWait) {
            waitingArgs = args;
            return;
        };
        cb(...args); 
        shouldWait = true;
        setTimeout(timeoutFunc ,delay);
    };
    
}