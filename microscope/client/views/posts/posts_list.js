Template.newPosts.helpers({
    options: function() {
        return {
            sort: {
                submitted: -1
            },
            handle: newPostsHandle
        }
    }
});
Template.bestPosts.helpers({
    options: function() {
        return {
            sort: {
                votes: -1,
                submitted: -1
            },
            handle: topPostsHandle
        }
    }
});
Template.postsList.helpers({
    postsWithRank: function() {
        var i = 0,
            options = {
                sort: this.sort,
                limit: this.handle.limit()
            };
        return Posts.find({}, options).map(function(post) {
            post._rank = i;
            i += 1;
            return post;
        });
    },

    postsReady: function() {
        return this.handle.ready();
    },
    allPostsLoaded: function() {
        return this.handle.ready() && Posts.find().count() < this.handle.loaded();
    }
});
Template.postsList.events({
    'click .load-more': function(event) {
        event.preventDefault();
        this.handle.loadNextPage();
    }
});
Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    },
    commentsCount: function() {
        return Comments.find({
            postId: this._id
        }).count();
    }
});
Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});
Template.postsList.helpers({
    posts: function() {
        return Posts.find({}, {
            sort: {
                submitted: -1
            }
        });
    }
});
