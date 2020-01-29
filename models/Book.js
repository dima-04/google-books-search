var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var BookSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  authors: {
    type: [String],
    required: false
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", BookSchema);

// Export the Book model
module.exports = Book;
