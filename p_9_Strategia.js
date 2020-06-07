var Travel = function() {
    this.transferType = "";
};
 
Travel.prototype = {
    setStrategy: function(transferType) {
        this.transferType = transferType;
    },
 
    calculate: function(time) {
        return this.transferType.calculate(time);
    }
};
 
var Car = function() {
    this.calculate = function(transferType) {
        return "60 PLN";
    }
};
 
var Train = function() {
    this.calculate = function(transferType) {
        return "35 PLN";
    }
};
 
var Bus = function() {
    this.calculate = function(transferType) {
        return "40 PLN";
    }
};

    var transferType= { from: "place A", to: "place B" };
 
    var car = new Car();
    var train = new Train();
    var bus = new Bus();
 
    var travel = new Travel();
 
    console.log("\n9: Strategia: \n");
    travel.setStrategy(car);
    console.log(("Koszt dojazdu autem: " + travel.calculate(transferType)));
    travel.setStrategy(train);
    console.log(("Koszt dojazdu pociagiem: " + travel.calculate(transferType)));
    travel.setStrategy(bus);
    console.log(("Koszt dojazdu busem: " + travel.calculate(transferType)));

