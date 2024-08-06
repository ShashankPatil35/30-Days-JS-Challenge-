
//Activity-3
const array = [1,2,3,4,5];
console.log("Array numbers are: ",array);

const newArr = [...array,6,7,8,9,10];
console.log("new Array is ",newArr);
// ...............
const sum = (...args)=>args.reduce((acc,curr)=>curr+acc,0);
console.log(sum(1,2,3,4,5,6,7));



