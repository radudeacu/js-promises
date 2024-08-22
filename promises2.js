
const asyncFunction = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("From asyncFunction!");
        }, 1000)
    });
}

asyncFunction()
    .then(() => console.log("Wait for asyncFunction"));
// console.log("Wait for asyncFunction");