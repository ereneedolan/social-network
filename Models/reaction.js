const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {type: Schema.Types.ObjectId, default: ()=>Types.ObjectId() },
    reactionBody: {type: String, required: true, minlength: 1, maxlength: 280 }, 
    username:{type: String},
    createdAt: {type: Date, default: Date.now, get: (date)=> new Date(date).toLocaleDateString},
},
{
    toJSON: {
      getter: true,
    },
    id: false,
}
)
module.exports = reactionSchema;