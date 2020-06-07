var carPrototype = {
        init: function (carModel) {
        this.model = carModel;
    },
        getModel: function () {
        console.log('Model auta: ' + this.model);
    }
};
   
function vehicle(model) {
    function F() {};
        F.prototype = carPrototype;
        
        var f = new F();
        f.init(model);
        return f;
    }
   var car = vehicle('Fiat Punto');

console.log('\n5: Prototyp: \n'); 
car.getModel();
