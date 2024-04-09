const mongoose = require("mongoose");

//? This is right logic of the create schema in the database
const schema = mongoose.Schema({
  profileID: {
    type: Number,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    required: true,
    trim: true,
  },
  followersCount: {
    type: Number,
    required: true,
    trim: true,
  },
  followingCount: {
    type: Number,
    required: true,
    trim: true,
  },
});

//? This is your Model Schema Code
// const schema = mongoose.Schema({
//   profileID: Number,
//   username: String,
//   bio: String,
//   followersCount: Number,
//   followingCount: Number,
// });

//? Create collection in the mongoDB Database
const collectionSNPSchema = new mongoose.model("SNP_Schema", schema);

module.exports = collectionSNPSchema;
