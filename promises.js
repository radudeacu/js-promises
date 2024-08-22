// If promise is fulfilled -> resolve() -> .then()
// If promise is rejected  -> reject() -> .catch()

let shoesAvailable = new Promise((resolve, reject) => {
    let inStock = true;

    if(inStock) {
        //Promise is fulfilled
        resolve("Store has shoes in stock");
    } else {
        reject("Store does not have shoes in stock");
    }
});

let sufficientFunds = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Yay! Enough money in the bank"), 1000)
    })
};

let transaction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Transaction went through"), 1000)
    })
};

// shoesAvailable
//     .then((response) => {
//         console.log(response);
//         return sufficientFunds();
//     })
//     .then((response) => {
//         console.log(response);
//         return transaction();
//     })
//     .then((response) => console.log("Finished! " + response))
//     .catch((err) => console.log(err));


// Promise.all takses in an array of promise objects and runs them at the same time in parallel, when the last promise in the array resolves you can .then that and you ll have access to an array of parameters from the resolve functions.

Promise.all([shoesAvailable, sufficientFunds(), transaction()])
    .then((values) => console.log(values));

