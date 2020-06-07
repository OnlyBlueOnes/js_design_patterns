function GeoLocation() {
 
    this.getLocation = function(city) {
        
        if (city === "Sopot") {
            return "Wykryto obecnosc w Sopocie";
        } else if (city === "Gdynia") {
            return "Wykryto obecnosc w Gdyni";
        } else if (city === "Gdansk") {
            return "Wykryto obecnosc w Gdansku";
        } else {
            return "";
        }
    };
}
 
function GeoProxy() {
    var geoLocation = new GeoLocation();
    var geoCache = {};
 
    return {
        getLocation: function(city) {
            if (!geoCache[city]) {
                geoCache[city] = geoLocation.getLocation(city);
            }
            console.log(geoCache[city]);
            return geoCache[city];
        },
        getCount: function() {
            var count = 0;
            for (var code in geoCache) { count++; }
            return count;
        }
    };
};
    
    console.log("\n13: Proxy: \n");
    var geo = new GeoProxy();
 
    geo.getLocation("Gdansk");
    geo.getLocation("Sopot");
    geo.getLocation("Sopot");
    geo.getLocation("Sopot");
    geo.getLocation("Gdynia");
    geo.getLocation("Gdynia");

    console.log("Cache: " + geo.getCount());
