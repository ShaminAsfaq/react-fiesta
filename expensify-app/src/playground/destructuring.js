//  Destructuring Examples


// const person = {
//     // name: 'Shamin',
//     age: 26,
//     location: {
//         city: 'Dhaka',
//         temp: 31
//     }
// };


// const {name: firstName = 'Da Vinci', age} = person;
// console.log(`${firstName} is ${age} years old.`);

// const {temp: temperature, city} = person.location;
// console.log(`Temperature is ${temperature} in ${city}.`);


// const book = {
//     title: 'The Da Vinci Code',
//     author: 'Dan Brown',
//     publisher: {
//         // name: 'Batighar Publications Ltd.'
//     }
// };


// const {name = 'Indie'} = book.publisher;
// console.log(name);

// const address = ['221b Baker St.', 'London', 'England', 'IOU'];
// const [,,country = 'United Kingdom'] = address;
// console.log(country);


const item = [
    'Coffee (hot)', //  Coffee Type
                    //  ------------                
                    //  Quantity
                    //  ------------
    '$2.00',        //  Small
    '$2.50',        //  Medium
    '$2.75'         //  Large
];

const [coffee,,medium] = item;

console.log(coffee, medium);





