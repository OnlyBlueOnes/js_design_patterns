var Friend = function(name) {
    this.name = name;
    this.chat = null;
};
 
Friend.prototype = {
    send: function(message, to) {
        this.chat.send(message, this, to);
    },
    receive: function(message, from) {
        console.log(from.name + " to " + this.name + ": " + message);
    }
};
 
var Chat = function() {
    var friends = {};
 
    return {
 
        save: function(friend) {
            friends[friend.name] = friend;
            friend.chat = this;
        },
 
        send: function(message, from, to) {
            if (to) {                     
                to.receive(message, from);    
            } else {                       
                for (key in friends) {   
                    if (friends[key] !== from) {
                        friends[key].receive(message, from);
                    }
                }
            }
        }
    };
};

    var friend1 = new Friend("friend1");
    var friend2 = new Friend("friend2");
    var friend3 = new Friend("friend3");
 
    console.log("\n6: Mediator")
    var chat = new Chat();

    chat.save(friend1);
    chat.save(friend2);
    chat.save(friend3);
 
    friend1.send("Message_1");
    friend2.send("Message_2",friend1);
    friend1.send("Message_3",friend2);
