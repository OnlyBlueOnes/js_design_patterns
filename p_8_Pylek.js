function Flyweight (title, author, publisher) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
};
 
var FlyWeightFactory = (function () {
    var flyweights = {};
 
    return {
 
        get: function (title, author, publisher) {
            if (!flyweights[title + author]) {
                flyweights[title + author] = 
                    new Flyweight(title, author, publisher);
            }
            return flyweights[title + author];
        },
 
        getCount: function () {
            var count = 0;
            for (var f in flyweights) count++;
            return count;
        }
    }
})();
 
function BookCollection () {
    var books = {};
    var amount = 0;
 
    return {
        add: function (title, author, publisher, pages, id) {
            books[id] = 
                new Book(title, author, publisher, pages, id);
            amount++;
        },
 
        get: function (id) {
            return books[id];
        },
 
        getCount: function () {
            return amount;
        }
    };
}
 
var Book = function (title, author, publisher, pages, id) {
    this.flyweight = FlyWeightFactory.get(title, author, publisher);
    this.pages = pages;
    this.id = id;
    this.getMake = function () {
        return this.flyweight.title;
    }
}
    var books = new BookCollection();
    
    books.add("Title", "Au_1", "Publisher", "349", "id_1");
    books.add("Title", "Au_1", "Publisher", "765", "id_2");
    books.add("Title", "Au_1", "Publisher", "234", "id_3");
    books.add("Title", "Au_1", "Publisher", "232", "id_4");
    books.add("Book", "Au_2", "Publisher", "128", "id_5");
 
    console.log("\n8: Pylek: \nKsiazki: "
        + books.getCount()
        + "\nStworzone pylki: " 
        + FlyWeightFactory.getCount());

  
  