// Before you begin coding, be sure that you:
// a. Cleaned up the coffee_data.js file
// b. Connect the coffee_data.js file to this index.js file.

// Prompt 2:
// Print an array of all the drinks.

// Prompt 3
// Print an array of drinks that cost 5 and under.

// Prompt 4
// Print an array of drinks that are priced at an even number.

// Prompt 5
// Print the total if you were to order one of every drink.

// Prompt 6
// Print an array with all the drinks that are seasonal.

// Prompt 7
// Print all the seasonal drinks with the words "with imported beans" after the item name.
// For example: "affogato with imported beans"
const coffeeMenu = require("./coffee_data_starter.js");

const printName = (item) => {
    return item.name;
}
console.log(coffeeMenu.map(printName));


const underFive = (item) => {
    return item.price <= 5;
}
const itemsUnderFive = coffeeMenu.filter(underFive);
(itemsUnderFive);
console.log(itemsUnderFive)


function isEven(value) {
    return value.price % 2 === 0;
}
 
let filtered = coffeeMenu.filter(isEven);
console.log(filtered);


const total =(acc, curr) => {
    return acc + curr.price 
}
let isFiltered = coffeeMenu.reduce(total, 0) 

console.log(isFiltered)

