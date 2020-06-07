console.log("\n12: Lancuch zobowiazan: \n");

var cashDrawer = function(amount) {
    this.amount = amount;
    console.log("W kasie jest lacznie " + amount + " PLN\n");
}
 
cashDrawer.prototype = {
    get: function(denomination) {
        var count = Math.floor(this.amount / denomination);
        this.amount -= count * denomination;
        console.log("W kasie jest " + count + " nominalow " + denomination + " PLN");
        return this;
    }
}
 
    var request = new cashDrawer(513);
    
    request.get(100).get(50).get(20).get(10).get(5).get(2).get(1);
