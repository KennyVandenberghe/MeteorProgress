  Meteor.startup(function() {
      Meteor.publish("Categories", function() {
          return Lists.find({
              owner: this.userId
          }, {
              fields: {
                  Category: 1
              }
          });
      });
      Meteor.publish("listdetails", function(category_id) {
          return Lists.find({
              _id: category_id
          });
      });
  });
