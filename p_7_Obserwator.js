function Subject() {
    this.observers = [];
}
 
Subject.prototype = {
 
    subscribe: function(fn) {
        this.observers.push(fn);
    },
 
    unsubscribe: function(fn) {
        this.observers = this.observers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
 
    fire: function(o, thisObj) {
        var scope = thisObj || window;
        this.observers.forEach(function(item) {
            item.call(scope, o);
        });
    }
}

    var subObserver = function(item) { 
        console.log("Subscribed: " + item); 
    };
 
    var click = new Subject();

    console.log("\n7: Obserwator")
    click.subscribe(subObserver);
    click.fire('event_1');
    click.unsubscribe(subObserver);
    click.fire('event_2');
    click.subscribe(subObserver);
    click.fire('event_3');