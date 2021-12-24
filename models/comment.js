var mongoose = require("mongoose");

// Get the Schema constructor
var Schema = mongoose.Schema;

// Using Schema constructor, create a ProductSchema
var commentSchema = new Schema({
  comment: {
    type: Array,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
});

// Create model from the schema
var Comment = mongoose.model("comment", commentSchema);

// Export model
module.exports = Comment;