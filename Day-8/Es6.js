//Activity-1
const personAge = 21;
const name = 'JavaScript';
console.log(`${name} age is ${personAge}`);

const multiLine = `this is a multi line string 
consisting of multiple lines`;
 
console.log(multiLine);

//Activity-2
const numbers = [1,2,3,4,5];
const [a,b] = numbers;
console.log(a);
console.log(b);


const lib = {
    author:'SomeAuthor',
    title:'SomeTitle',
};
const {author,title} = lib;
console.log(`Author is -${author} with title -${title}`);
