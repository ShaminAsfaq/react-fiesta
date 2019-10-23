console.log('This is UtilsJS !!');

const square = (x) => x*x;
const add = (a,b) => a+b;

const isAdult = (age) => age>=18;
const canDrink = (age) => age>=21;

const subtract = (a,b) => a-b;

export {
    square,
    add,
    isAdult,
    canDrink,
    subtract as default
};


