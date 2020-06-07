var TrafficLight = function () {
    var count = 0;
    var currentState = new Yellow(this);
 
    this.change = function (state) {
        if (count++ >= 5) return;
        currentState = state;
        currentState.go();
    };
 
    this.start = function () {
        currentState.go();
    };
}
 
var Red = function (light) {
    this.light = light;
 
    this.go = function () {
        console.log("Czerwone: STOP");
        light.change(new Green(light));
    }
};
 
var Yellow = function (light) {
    this.light = light;
 
    this.go = function () {
        console.log("Zolte: CZEKAJ");
        light.change(new Red(light));
    }
};
 
var Green = function (light) {
    this.light = light;
 
    this.go = function () {
        console.log("Zielone: DROGA WOLNA");
        light.change(new Yellow(light));
    }
};
 
    var light = new TrafficLight();
    console.log("\n10: Stan: \n");
    light.start();
 
