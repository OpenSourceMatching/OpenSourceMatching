import mongoose from "mongoose";

// Exact fields and which are required will depend on requirements from descope
const messageSchema = new mongoose.Schema({
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
  isUserSender: { type: Boolean, required: true },
});

const userSchema = new mongoose.Schema({
  // login info
  email: { type: String, required: true },
  password: { type: String}, // not sure descipe will even require a password

  // personal info
  firstName: { type: String,},
  lastName: { type: String},
  linkedIn: { type: String},
  github: { type: String},
  personalWebsite: { type: String},
  about: { type: String},
  location: { type: String},
  zip: {type: Number},
  
  // techincal info
  technologies: { type: [String]},
  lookingFor: { type: String}, // someone to work on my project, to work on someone else's project, both ??

  // messages
  messages: [{
    otherUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: [messageSchema],
    default: [],
  }],

});

// this or statement handles if the model is already defined
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;