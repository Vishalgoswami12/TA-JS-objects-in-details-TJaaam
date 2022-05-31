class Book{
    constructor(title,category,author,isRead=false,finishedDate){
        this.title=title;
        this.category=category;
        this.author=author;
        this.isRead=isRead;
        this.finishedDate=finishedDate;
    }
    markBookAsRead(){
        this.isRead=true;
        this.finishedDate=Date.now();
    }
}

class BookList{
    constructor(book,index){
        this.book=[];
        this.book[index]=index;
    }
    add(book){
        return this.book.push(book);
    }
    getCurrentBook(i){
        return this.book[i];
    }
    getNextBook(){
       return this.book[i++];
    }
    getPrevBook(){
        return this.book[i--];
    }
    changeCurrentBook(n){
        return this.book.splice(n)
    }
}