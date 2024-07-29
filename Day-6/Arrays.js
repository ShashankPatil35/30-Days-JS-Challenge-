// Activity-1
const arr = [1,2,3,4,5];
console.log(arr);

const firstEle = arr[0];
console.log(firstEle);
const n = arr.length;
const lastEle = arr[n-1];
console.log(lastEle);

//Activity-2
arr.push(6);
console.log("After pushing number to array " + arr);
arr.pop();
console.log("After poping from array " + arr);
arr.shift();
console.log("After using shifting from array "+ arr);
arr.unshift(7);
console.log("After using unshift(pushing at first) " + arr);

//Activity-3
const newArr = [1,2,3,4,5,6,7];
console.log("Original array " + newArr);

const mapReduce  = newArr.map((num)=>num*2);
console.log("Doubled array " + mapReduce);

const FilterArray = newArr.filter((num)=>num%2===0)
console.log("Even number array " + FilterArray);

const ReduceArr = newArr.reduce((accumulator,currValue)=>accumulator+currValue,0);
console.log("Sum of array " + ReduceArr);

//Activity-4
const newArr2 = [1,2,3,4,5];
console.log("Using for Loop ");
for(let i=0;i<newArr2.length;i++){
    console.log(newArr2[i]);
}
console.log("Using forEach ");
newArr2.forEach((num)=>console.log(num))

// Activity-5
const multiArr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log("2D Array "+multiArr);
console.log(multiArr[1][1]);

