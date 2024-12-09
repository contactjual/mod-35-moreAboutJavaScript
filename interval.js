// setInterval is work mostly similler to setTimeout. But setInterval is running until I close


let num = 0;

const myClock = setInterval(() => {  // use 'clearInterval()' to close this; 

    num ++;

    console.log(myClock, num);


    if (num>5){
        clearInterval(myClock);
    }


}, 3000);