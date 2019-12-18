const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is resolved data.')
    }, (1500));
});

console.log('BEFORE')

promise.then((data) => {
    console.log(data)
    return 'Gibberish'
}).then((value) => {
    console.log(`Second THEN: ${value}`)
}).catch((err) => {
    console.log('error', err)
})

console.log('AFTER')


