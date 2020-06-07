function JournalFactory() {}

JournalFactory.prototype.book = function () {
    return this.pages + " stron";
};

JournalFactory.factory = function (type){
    var constr = type,
        newBook;

        if (typeof JournalFactory[constr] !== "function"){
            throw {
                name: "Error",
                message: constr + " nie istnieje"
            };
        }
    if (typeof JournalFactory[constr].prototype.book !== "function"){
        JournalFactory[constr].prototype = new JournalFactory();
    }
    
    newBook = new JournalFactory[constr]();
    return newBook;
};

JournalFactory.HarryPotter = function (){
    this.pages = 320;
};

JournalFactory.CookBook = function (){
    this.pages = 510;
};
JournalFactory.Hobbit = function (){
    this.pages = 600;
};

var harryPotter = JournalFactory.factory('HarryPotter');
var cookBook = JournalFactory.factory('CookBook');
var hobbit = JournalFactory.factory('Hobbit');
    
console.log('1: Fabryka: \n'+
    "Harry Pottter ma " + harryPotter.book() + '\n' +
    "Ksiazka kucharska ma " + cookBook.book()+ '\n' +
    "Hobbit ma " + hobbit.book());


