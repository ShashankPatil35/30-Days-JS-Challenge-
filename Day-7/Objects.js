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
    return `Title:${book.title} by Author
    :${book.author}`;
}; 
console.log(book.getTitleAndAuthor());
book.updateYear = function(year){
    book.year = year;
    return year; //instead of this we can do as: this->year = year
}
console.log(book.updateYear(2010));


//Activity-3
const library = {
    name:"Knowledge Base",
    books:[
        {
            title:'title-1',
            author:'author-1',
            year:2002,
        },
        {
            title:'title-2',
            author:'author-2',
            year:2003,
        },
        {
            title:'title-3',
            author:'author-3',
            year:2005,
        },
    ]
};
console.log(library);
console.log("Library name: ",library.name);
console.log("Titles of book: ");
library.books.forEach((book=>console.log(book.title)));

//Activity-4

book.getTitleAndAuthor = function(){
    return `${this.title} ${this.year}`;
}

//Activity-5
for(const prop in book){
    console.log(`${prop}: ${book[prop]}`);
}
const allKeys = Object.keys(book);
const allValues = Object.values(book);
console.log("Keys: ",allKeys);
console.log("Values: ",allValues);

