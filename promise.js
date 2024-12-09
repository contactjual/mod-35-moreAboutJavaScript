// const myPromise = () => {
//     return new Promise(resolve, reject)
// }


const myPromise = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if (success > 0.3) {
            resolve(success)
        }
        else {
            reject(success)
        }
    })
}

myPromise()
    .then(data => console.log('resolved data', data))
    .catch(err => console.log('rejected with value', err))



// async and await

async function myPromise() {
    const res = await fetch(''); // don't use '.then' while using async function
    const data = await res.json(); // don't use '.then' while using async function
    console.log(data);
}

// or arrow function 

const taskLoader = async () => {
    const res = await fetch(''); // don't use '.then' while using async function
    const data = await res.json(); // don't use '.then' while using async function
    console.log(data);  
}

myPromise();