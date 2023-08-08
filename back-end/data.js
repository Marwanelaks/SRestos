const mongoose = require('mongoose');

const platSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  durée: { 
    type: String,
    required: true,
  },
  étoiles: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
});

const restaurantSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  plats: [platSchema],
});

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  restaurant: {
    type: [restaurantSchema]
  },
});

const Chef = mongoose.model('User', userSchema);

module.exports = Chef;

