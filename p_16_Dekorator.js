function Purchase(price) {
    this.price = price || 100;
}
Purchase.prototype.getPrice = function () {
    return this.price;
};

Purchase.decorators = {};

Purchase.decorators.basicTax = {
    getPrice: function () {
        var price = this.uber.getPrice();
        price += price * 23 / 100;
        return price;
    }
};

Purchase.decorators.anotherTax = {
    getPrice: function () {
        var price = this.uber.getPrice();
        price += price * 9 / 100;
        return price;
    }
};
   
Purchase.decorators.money = {
    getPrice: function () {
        return "PLN " + this.uber.getPrice().toFixed(2);
    }
};

Purchase.prototype.decorate = function (decorator) {
    var F = function () {},
        overrides = this.constructor.decorators[decorator],
        i, newobj;
    F.prototype = this;
    newobj = new F();
    newobj.uber = F.prototype;
    for (i in overrides) {
        if (overrides.hasOwnProperty(i)) {
            newobj[i] = overrides[i];
        }
    }
    return newobj;
};

var sale = new Purchase(200);
sale = sale.decorate('basicTax');
sale = sale.decorate('anotherTax');
sale = sale.decorate('money');
console.log("\n16: Dekorator: \nCena koncowa: " + sale.getPrice());