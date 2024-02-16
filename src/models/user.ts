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
  name: { type: String},
  image: { type: String },

  // personal info
  linkedIn: { type: String},
  github: { type: String},
  personalWebsite: { type: String},
  about: { type: String},
  location: { type: String},
  zip: {type: Number},
  age: { type: Number},
  employer: { type: String},
  
  // techincal info
  technologies: { type: [String]},
  lookingFor: { type: String}, // someone to work on my project, to work on someone else's project, both
  activeProjects: {
    type: [{
      title: {type: String},
      description: {type: String},
    }],
    default: []
  },

  // messages
  messages: {
    type: [{
      otherUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      conversation: [messageSchema],
    }],
    default: [],
  },

});

// this or statement handles if the model is already defined
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;