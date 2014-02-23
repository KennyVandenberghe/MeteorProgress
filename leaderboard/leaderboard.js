// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Players = new Meteor.Collection("players");

if (Meteor.isClient) {
    Validation = {
        clear: function() {
            return Session.set("error", undefined);
        },
        set_error: function(message) {
            return Session.set("error", message);
        },
        valid_name: function(name) {
            this.clear();
            if (name.length == 0) {
                this.set_error("Name can't be blank");
                return false;
            } else if (this.player_exists(name)) {
                this.set_error("Player already exists");
                return false;
            } else {
                return true;
            }
        },
        player_exists: function(name) {
            return Players.findOne({
                name: name
            });
        }
    };
    Template.leaderboard.players = function() {
        return Players.find({}, {
            sort: {
                score: -1,
                name: 1
            }
        });
    };

    Template.leaderboard.selected_name = function() {
        var player = Players.findOne(Session.get("selected_player"));
        return player && player.name;
    };

    Template.player.selected = function() {
        return Session.equals("selected_player", this._id) ? "selected" : '';
    };

    Template.leaderboard.events({
        'click input.inc': function() {
            Players.update(Session.get("selected_player"), {
                $inc: {
                    score: 5
                }
            });
        }
    });

    Template.player.events({
        'click input.delete': function() {
            Players.remove(this._id);
        },
        'click': function() {
            Session.set("selected_player", this._id);
        }
    });
    Template.new_player.events({
        'click input.add': function() {
            var new_player_name = document.getElementById("new_player_name").value.trim();
            if (Validation.valid_name(new_player_name)) {
                Players.insert({
                    name: new_player_name,
                    score: 0
                });
            }
        }
    });
    Template.new_player.error = function() {
        return Session.get("error");
    };
}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
    Meteor.startup(function() {
        if (Players.find().count() === 0) {
            var names = ["Ada Lovelace",
                "Grace Hopper",
                "Marie Curie",
                "Carl Friedrich Gauss",
                "Nikola Tesla",
                "Claude Shannon"
            ];
            for (var i = 0; i < names.length; i++)
                Players.insert({
                    name: names[i],
                    score: Math.floor(Random.fraction() * 10) * 5
                });
        }
    });
}
