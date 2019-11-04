const myArray = [];

const numbers = [1,2,3,4,7,10];

console.log(numbers);
console.log(numbers[3]);
console.log(numbers.length);
console.log('Number: 3, ' + numbers[numbers.length - 4]);

numbers.push(13);
console.log(numbers);
numbers.pop();
console.log(numbers);

const items = [1,'two', [3,4], false, null];

for(let i = 0; i < items.length; i++) {
    console.log(items[i]);
}
for(let number of numbers) {
    console.log(numbers);
}

function arrayToString(array) {
    console.log(array.join(', '));
}

function stringToArray(input) {
    console.log(input.split(','));
}

arrayToString(["bundle.js", "*.js.map", ".c9"]);
stringToArray('bundle.js, *.js.map, .c9');

const myObject = {
    five: 5,
    six: 'six'
};

console.log(myObject.five);
console.log(myObject.six);

myObject.newItem = 'This is a new item.';
console.log(myObject.newItem);