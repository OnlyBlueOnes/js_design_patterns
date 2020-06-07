var Calculator={
 
    add: function(n1,n2) {
        return n1+n2;
    },

    substract: function(n1,n2) {
        return n1-n2;
    },
    
    multiply: function(n1,n2) {
        return n1*n2;
    },
    
    divide: function(n1,n2) {
        return n1/n2;
    },
};

Calculator.calc=function(command)  {
        return Calculator[command.type](command.n1,command.n2);
};

console.log("\n4: Polecenie: \n")
console.log("Dodawanie: " + Calculator.calc({type: "add",n1:6,n2:3})); 
console.log("Odejmowanie: " + Calculator.calc({type: "substract",n1:9,n2:2}));
console.log("Mnozenie: " + Calculator.calc({type: "multiply",n1:6,n2:1}));
console.log("Dzielenie: " + Calculator.calc({type: "divide",n1:10,n2:2}));


   