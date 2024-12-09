// const myPromise = () => {
//     return new Promise(resolve, reject)
// }


const myPromise = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if (success > 0.3 ) {
            resolve(success)
        }
        else {
            reject(success)
        }
    })
}

myPromise ()
    .then (data => console.log('resolved data', data))
    .catch (err => console.log('rejected with value', err))