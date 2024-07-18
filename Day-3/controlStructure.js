// Activity-1
let num = -1;
if (num > 0) {
    console.log("Number is Positive");
} else if (num < 0) {
    console.log("Number is Negative");
} else {
    console.log("Number is Zero");
}
let age=10;
if(age>=18){
    console.log("Greater than 18-eligible to vote")
}
else{
    console.log("Lesser than 18-cant vote");
}

// Activity-2
let a = 10;
let b = 11;
let c = 14;

if(a>b){
    if(a>c){
        console.log("Greatest Number is",a);
    }
    else{
        console.log("Greatest Number is",c);
    }
}
else{
    if(b>c){
        console.log("Greatest Number is",b);
    }
    else{
        console.log("Greatest Number is",c);
    }
}

// Activity-3
//task-1
weekDay = 5;
switch(weekDay){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
//task-2
let marks = 80;
let grade;
switch(true){
    case marks>=90:
        grade = "A";
        break;
    case marks>=80 && marks<90:
        grade = "B";
        break;
    case marks>=70 && marks<80:
        grade = "C";
        break;
    case marks>=60 && marks<70:
        grade = "D";
        break;
    case marks>=50 && marks<60:
        grade = "E";
        break;
    case marks<40:
        grade = "F";
        break;
    default:
        grade = "padna padega bhai"
        break;
}
console.log("Grade is",grade);


// Activity-4
let number = 10;
let res = number%2==0 ? "Even":"Odd";
console.log(res);

// Activity-5
//leap year
let year = 2024;
if(year%4===0 && year%100!==0 || year%400===0){
    console.log(`${year} is a leap year`);
    // console.log(year + " is a Leap year");
}
else{
    console.log(`${year} is not a leap year`);
    // console.log(year + "is Not a leap year");
}