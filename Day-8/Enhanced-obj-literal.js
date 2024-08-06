//Activity-5
const username = "Shashank";
const age = 21;
const password = "123456789";

const user = {
    username,
    age,
    password,
    greet(){
        console.log(`Hey this is ${username} of age ${age}`);
    }
};

console.log(user);
user.greet();

// ..............
let i = 0 ;
const num = {
    [`foo${i++}`] : i,
    [`foo${i++}`] : i,
    [`foo${i++}`] : i ,
    [`foo${i++}`] : i,
}
console.log(num);
console.log(num.foo1);
console.log(num.foo2);