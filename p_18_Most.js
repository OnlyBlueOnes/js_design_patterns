function Circle(color) {
    this.color = color;

    this.toString = function () {
        return `${this.color.getColor()} kolo`;
    };
}

function Square(color) {
    this.color = color;

    this.toString = function () {
        return `${this.color.getColor()} kwadrat`;
    };
}

function Triangle(color) {
    this.color = color;

    this.toString = function () {
        return `${this.color.getColor()} trojkat`;
    };
}

function Red() {
    this.getColor = function () {
        return 'Czerwony';
    }
}

function Blue() {
    this.getColor = function () {
        return 'Niebieski';
    }
}

function Green() {
    this.getColor = function () {
        return 'Zielony';
    }
}

const red = new Red();
const blue = new Blue();
const green = new Green();

const red_TR = new Triangle(red);
const blue_TR = new Triangle(blue);
const green_SQ = new Square(green);
const blue_CR = new Circle(blue)

console.log("\n18: Most: \n" + red_TR + "\n" + blue_TR + "\n" + green_SQ+ "\n" + blue_CR);
