var mongoose = require("mongoose");

// Get the Schema constructor
var Schema = mongoose.Schema;

// Using Schema constructor, create a ProductSchema
var categorySchema = new Schema({
    category: {
        type: String,
        required: true,
    }
});

// Create model from the schema
var Category = mongoose.model("category", categorySchema);

// Export model
module.exports = Category;