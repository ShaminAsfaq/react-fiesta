const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is resolved data.')
    }, (1500));
});

console.log('BEFORE')

promise.then((data) => {
    console.log(data)
})

console.log('AFTER')


