import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBLraI8ilYiWNXtDx7YV2r8YCbCdWE3-K0",
    authDomain: "expensify-640fc.firebaseapp.com",
    databaseURL: "https://expensify-640fc.firebaseio.com",
    projectId: "expensify-640fc",
    storageBucket: "expensify-640fc.appspot.com",
    messagingSenderId: "739080185838",
    appId: "1:739080185838:web:fd6bf038438f50c8bd50ff",
    measurementId: "G-XK2NYBHL0C"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

// database.ref('expenses').on('value', (snapshot) => {
//     console.log(snapshot.val())
// })

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').on('child_changed',(snapshot) => {
    console.log(snapshot.key, 'changed')
})

// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     // console.log(expenses)
// })

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'Monthly bill of the living place',
//     amount: 10900,
//     createdAt: 4812371234614581
// })

// database.ref('expenses').push({
//     description: 'Phone Bill',
//     note: 'Amount spent in a month on phone',
//     amount: 5008,
//     createdAt: 568447823423647
// })

// database.ref('expenses').push({
//     description: 'Food',
//     note: 'Cost I bear for my stomach care',
//     amount: 50080,
//     createdAt: 752143592456446534
// })


// const onValueChange = database.ref().on('value', (snapshot) => {
//     const { name, job } = snapshot.val()
//     console.log(`${name} is a ${job.title} at ${job.company}`)
// }, (err) => {
//     console.log(err)
// })

// setTimeout(() => {
//     database.ref().update({
//         'job/title': 'React Developer'
//     })
// }, 3500)


// setTimeout(() => {
//     database.ref().update({
//         'job/company': 'Southeast University'
//     })
// }, 7000)

// setTimeout(() => {
//     database.ref().update({
//         'job/company': 'Selise Ltd.'
//     })
// }, 10500)

/*
const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val())
}, (err) => {
    console.off(err)
})

setTimeout(() => {
    database.ref().update({
        age: 28
    })
}, 3500)

setTimeout(() => {
    database.ref().off('value', onValueChange)
}, 7000)

setTimeout(() => {
    database.ref().update({
        age: 29
    })
}, 10500)
*/

// database.ref().once('value').then((snapshot) => {
//     console.log(snapshot.val())
// }).catch((err) => {
//     console.log(err)
// })

// database.ref().set({
//     name: 'Shamin Asfaq',
//     age: 26,
//     stressLevel: 2,
//     job: {
//         title: 'Software Developer',
//         company: 'Southeast University'
//     },
//     location:{
//         city: 'Mirpur',
//         country: 'Bangladesh'
//     }
// }).then(() => {
//     console.log('Promise kept by Google :)')
// }).catch((err) => {
//     console.log(err)
// });

// database.ref().update({
//     'job/company': 'Furqan Software Ltd.',
//     'location/city': 'Dhanmondi',
//     stressLevel: 8,
// })


// database.ref().remove().then(() => {
//     console.log('Single status removed from Firebase')
// }).catch(() => {
//     console.log('Error removing attribute: isSingle.')
// })

