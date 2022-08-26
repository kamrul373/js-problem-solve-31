// You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ]. Now convert this array into an even array (array with evennumbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map() method. Hints: add one to any odd number and it will become an even number.

// by loop
const numbers = [1, 3, 5, 7, 9];

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] + 1;
}
console.log(numbers);

// b array map()

const odd = [1, 3, 5, 7, 9];

const even = odd.map(n => n + 1);

console.log(even);