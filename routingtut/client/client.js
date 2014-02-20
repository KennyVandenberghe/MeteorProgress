/**
 * Routing
 */
Meteor.Router.add({
    '/example': 'my-example',
    '/': 'welcome',
    '*': '404'
});
