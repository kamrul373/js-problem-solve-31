// You have an array [ 1, 9, 17, 22 ]. Add the all elements of this array and give output. Do this using for loop & array.reduce() method.

// by for loop

const n = [1, 9, 17, 22];
let sum = 0;
for (let i = 0; i < n.length; i++) {
    sum = sum + n[i];
}
console.log(sum);

// by array reduce

/* const total = n.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current;
}, 0);
*/
const total = n.reduce((previous, current) => previous + current, 0);
console.log(total);
