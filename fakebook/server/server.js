Meteor.publish("posts", function() {
    return Posts.find({});
});
Meteor.publish("likes", function() {
    return Likes.find({
        post: postid
    });
});
Meteor.methods({
    //{text:'', owner:'',date:'', parent:''}
    'addPost': function(options) {
        var post = {
            text: options.text,
            owner: Meteor.userId(),
            date: new Date(),
            parent: options.parent
        };
        Posts.insert(post);
    },
    'removePosts': function(id) {
        Posts.remove({
            _id: id
        });

    },
    'removeAllPosts': function() {
        Posts.remove({});
    }
});
