// Activity - 1
// 1-
let num1 = 3;
let num2 = 5;
    console.log(num1+num2);
// 2-
let num3 = 5;
let num4 = 7;
    console.log(num3-num4)
// 3-
let a = 7;
let b = 9;
    console.log(a*b);
// 4-
let c = 9;
let d = 3;
    console.log(c/d);
// 5-
let x = 10;
let y = 2;
    console.log(x%y);

console.log(".............")

// Activity - 2
let money = 100;
console.log(money);
money += 50;
console.log(money);
money -= 20;
console.log(money);

console.log(".............")

// Activity - 3
let comp1 = 10;
let comp2 = 20;
// if (comp1 > comp2)
// console.log(comp1);
// else if(comp1 > comp2){
//     console.log(comp2);
// }
console.log(comp1>comp2);
console.log(comp1<comp2);
let comp3 = 20;
console.log(comp1<=comp3);
console.log(comp2<=comp3);
console.log(".............")
// == (Equality Operator) ->if the operands are of different types, JavaScript will attempt to convert them to the same type before making the comparison.
// === (Strict Equality Operator) ->It compares both the value and the type of the operands.

console.log(5 == '5');
console.log(true == 1);
console.log(null == undefined); // true (special case where null and undefined are considered equal)
console.log(0 == ''); 
console.log(5 === '5');
console.log(true === 1);
console.log(null === undefined); 
console.log(0 === ''); 

console.log(".............")

//Activity - 4
console.log(comp1>comp2 && comp1==comp2)
console.log(comp2>comp1 || comp1==comp3)

let isLogin = true;
console.log(!isLogin);

console.log(".............")
//Activity - 5
let neg = -10;
let res = neg<0 ? "num is negative" : "num is positive"
console.log(res)
