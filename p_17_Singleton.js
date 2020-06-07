var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("instancja");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
 

    console.log("\n17: Singleton: \nInstancja 1 = Instancja 2 ?\n" + (instance1 === instance2));  