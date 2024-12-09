console.log(1);
console.log(2);
myNum();
console.log(4);
console.log(5);
console.log(6);

function myNum(){
    console.log(3);
}


// fetch and timeout function does not work sirially
console.log('fetch function')

console.log(1);
console.log(2);
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
console.log(4);
console.log(5);
console.log(6);






console.log('timeout');

console.log(1);
console.log(2);
setTimeout(myNum)
console.log(4);
console.log(5);
console.log(6);

function myNum(){
    console.log(3);
}






console.log('timeout with timing');

console.log(1);
console.log(2);
setTimeout(myNum, 4000) // 4000 mili seconds means 4 seconds
console.log(4);
console.log(5);
console.log(6);

function myNum(){
    console.log(3);
}

