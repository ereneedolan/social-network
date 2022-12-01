const { Schema, model} = require('mongoose');
const reactionSchema = require('./reaction.js')

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: {type: Date, default: Date.now, get: date => new Date(date).toLocaleDateString()}, 
    username:{type: String, required: true},
    reactions: [reactionSchema]
    
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

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reaction.length;
  })
 
// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;