//Activity-1
const book  = {
    title:'NewBook',
    author:'abc',
    year:2002,
};

console.log(book);
console.log(`Title of book is ${book.title}`);
console.log(`Author of book is ${book.author}`);

//Activity-2
book.getTitleAndAuthor = function(){
    return `Title:${book.title} by Author:${book.author}`;
};
console.log(book.getTitleAndAuthor());
book.updateYear = function(year){
    book.year = year;
    return year; //instead of this we can do as: this->year = year
}
console.log(book.updateYear(2010));


//Activity-3



//Activity-4
//Activity-5