Items = new Meteor.Collection('items');
if (Meteor.isClient) {
    var insert_item = function() {
        Items.insert({
            item: $('.the_item').val()
        });
        $('.the_item').val('');
    }
    Template.add_item.events({
        'click .submit': function() {
            insert_item();
        },
        'keyup .the_item': function(evt) {
            if (evt.which === 13) {
                insert_item();
            }
        }
    });
    Template.list_items.all_items = function() {
        return Items.find();
    };
    Meteor.Router.add({
        '/home': 'home',
        '/add': 'add_item',
        '/list': 'list_items'
    });
}
