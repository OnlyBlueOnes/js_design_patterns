var workerActivities = {
    process: function() {
        this.work();
        this.goOnBreak();
        this.goHome();
        return true;
    }
};
 
function inherit(proto) {
    var F = function() { };
    F.prototype = proto;
    return new F();
}

    var worker = inherit(workerActivities);
 
    worker.work = function() {
        console.log("Normalny tryb pracy");
    };
 
    worker.goOnBreak= function() {
        console.log("Przerwa");
    };
 
    worker.goHome = function() {
        console.log("Powrot do domu !");
    };
 
    console.log("\n11: Metoda szablonowa: \n");
    worker.process();
