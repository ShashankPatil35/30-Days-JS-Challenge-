// Activity-1

function check(num){
    if(num%2==0){
        console.log(`${num} is Even!`)
    }
    else{
        console.log(`${num} is Odd!`)
    }
}
check(5);
function square(num){
    console.log(num*num); // or num**2
}
square(5);

// Activity-2
function maxi(num1,num2){
    if(num1>num2){
        console.log(`${num1} is maximum`);
    }
    else{
        console.log(`${num2} is maximum`);
    }
}
maxi(35,53);
const ConcatString = function(str1,str2){
    return str1 + str2;
}
const s1 = "Hello";
const s2 = "Javascript";
const sayHello = ConcatString(s1, s2);
console.log(sayHello);

// Activity-3
const ans = (a,b)=>{
    return a+b;
}
console.log(ans(3,5));

const isPresent = (ch,str)=> str.includes(ch);
console.log(isPresent("H","Hello"));
//or 
// str.indexOf(ch) > -1 is the expression being evaluated.
// The indexOf method returns the index of the first occurrence of ch in str or -1 if ch is not found.
// The comparison > -1 converts the index to a boolean value: true if the index is greater than -1, and false if it is -1.
// const isPresent = (ch, str) => str.indexOf(ch) > -1;
// console.log(isPresent("t", "Javascript"));

// Activity-4
function mul(num,num2=3){
    console.log(num*num2);
}
mul(2);
//or
const product = (a,b=3)=> a*b;
console.log(product(10,2));
console.log(product(10));

const greet = (name,age=18)=> `Hello this is ${name}, age is ${age}`;
console.log(greet('Shashank',21));

// Activity-5
function callMe(func,num){
    for(let i=0;i<num;i++){
        func();
    }
}
const Gn = ()=> console.log("Good Night!!!");
callMe(Gn,5);

const double = x => x * 2;
const squareNumber = x => x * x;

const answer = (func1,func2,val)=>{
    //func2(func1(a));
    let a = func1(val);
    let b = func2(a);
    return b;
}
const res = answer(double,squareNumber,8);
const res2 = answer(double,squareNumber,5);
const res3 = answer(squareNumber,double,5);
console.log(res)
console.log(res2)
console.log(res3)