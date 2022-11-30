const { Schema, model} = require('mongoose');
const reactionSchema = require('reaction')

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: {type: Date, default: Date.now }, 
    username:{type: String, required: true},
    reactions: {reactionSchema}
    
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
      getter: true
    },
    id: false,
  }
);

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
  .virtual('friendcount')
  // Getter
  .get(function () {
    return this.friends.length;
  })
 
// Initialize our User model
const User = model('user', userSchema);

module.exports = User;