function Journal(name) {
    this.name = name;
 
    this.result = function () {
        console.log("Dziennik: " + name);
    };
}
 
function JournalFactory() {
 
    this.create = function(name) {
        return new Journal(name);
    };
}
 
function Magazine(name) {
    this.name = name;
 
    this.result = function () {
        console.log("Magazyn: " + name);
    };
}
 
function MagazineFactory() {
 
    this.create = function(name) {
        return new Magazine(name);
    };
}
 
    var press = [];
    var journalFactory = new JournalFactory();
    var magazineFactory = new MagazineFactory();
 
    console.log("\n2: Fabryka Abstrakcyjna: \n");
    press.push(journalFactory.create("Gazeta WYborcza"));
    press.push(journalFactory.create("Rzeczypospolita"));
    press.push(magazineFactory.create("Newsweek"));
    press.push(magazineFactory.create("Polityka"));
 
    for (var i = 0, len = press.length; i < len; i++) {
        press[i].result();
    }
