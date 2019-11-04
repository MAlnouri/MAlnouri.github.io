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

divider();

const items = [1,'two', [3,4], false, null];

for(let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

divider();

for(let number of numbers) {
    console.log(numbers);
}

divider();

function arrayToString(array) {
    console.log(array.join(', '));
}

function stringToArray(input) {
    console.log(input.split(','));
}

arrayToString(["bundle.js", "*.js.map", ".c9"]);
stringToArray('bundle.js, *.js.map, .c9');

function divider() {
    console.log('--------------------');
    console.log();
    console.log('--------------------');
}

divider();

const myObject = {
    five: 5,
    six: 'six'
};

console.log(myObject.five);
console.log(myObject.six);

myObject.newItem = 'This is a new item.';
console.log(myObject.newItem);

divider();

const smallNumbers = {
    one: 1,
    two: 2,
    three: 3
};

console.log('Values in object:',
    smallNumbers.one,
    smallNumbers.two,
    smallNumbers.three
);

divider()

items.push(myObject);
console.log(items);