function Color(name) {
    this.name = name;
}

Color.prototype.display = function () {
    console.log(this.name);
}

function Shape(name) {
    this.name = name;
    this.colors = [];
}

Shape.prototype.add = function (color) {
    this.colors.push(color);
}

Shape.prototype.remove = function (color) {
    for (let i = 0, length = this.colors.length; i < length; i++) {
        if (this.colors[i] === color) {
            this.colors.splice(i, 1);
            return true;
        }
    }    
    return false;
}

Shape.prototype.getColorName = function (index) {
    return this.colors[index].name;
}

Shape.prototype.display = function() {
    console.log(this.name);
    for (let i = 0, length = this.colors.length; i < length; i++) {
        console.log("   ", this.getColorName(i));
    }
}

sh_1 = new Shape('Kolo');
sh_2 = new Shape('Trojkat');
sh_3 = new Shape('Kwadrat');

c_1 = new Color('Czerwony');
c_2 = new Color('Zielony');
c_3 = new Color('Niebieski');

sh_1.add(c_1);
sh_1.add(c_2);
sh_1.add(c_3);

sh_2.add(c_1);

sh_3.add(c_1);
sh_3.add(c_2);

console.log("\n14: Kompozyt: \n");
sh_1.display();
sh_2.display();
sh_3.display();