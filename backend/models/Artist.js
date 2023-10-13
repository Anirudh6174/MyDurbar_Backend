const mongoose = require('mongoose');
//parameters defined for the data a artist should have
const artistSchema = new mongoose.Schema({    
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    
  },  
  title: String,
  genre: [String],
  category: String,
  subcategory: String,
  reviews: String,
  bio: [String],
  location: String,
  price: Number,
  rating: Number,
  coversrc: String,
  bannerimg: String,
  experience: String,
  instruments: [String],
  vidArray: [String],
  imangelink1: String,
  imagelink2: String,
  vidlink1: String,
  vidlink2: String
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;