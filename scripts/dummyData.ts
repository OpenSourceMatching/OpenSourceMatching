// Importing User model and connect to db is a pain so I just copy and pasted the code from the file.
const mongoose = require("mongoose");

// ****** To actually run this, need to copy and paste mongo uri

// **** User model ****
const messageSchema = new mongoose.Schema({
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
  isUserSender: { type: Boolean, required: true },
});

const userSchema = new mongoose.Schema({
  // login info
  email: { type: String, required: true, unique: true },
  name: { type: String},
  image: { type: String },

  // personal info
  linkedIn: { type: String},
  github: { type: String},
  personalWebsite: { type: String},
  about: { type: String},
  location: { type: String},
  zip: {type: String},
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

// **** Connect to mongo ****

let isConnected: boolean = false;

const connectToMongo = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect('INSERT MONGO URI HERE' || '', {
      dbName: 'Dev'
    });
    isConnected = true;
  } catch (err) {
    console.error('Error connecting to database', err);
  }
};


// create array of dummy data to be inserted

const dummyData = [
  {
    email: "milesSmith43@gmail.com",
    name: "Miles Smith",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    linkedIn: "https://www.linkedin.com/in/miles-smith-43",
    github: "https://www.github.com/milesSmith43",
    personalWebsite: "https://www.milesSmith43.com",
    about:
      "I am a full stack developer with a passion for front end design. I am currently looking for a project to work on with someone else.",
    location: "San Francisco",
    zip: "94110",
    age: 28,
    employer: "Google",
    technologies: ["React", "Node", "MongoDB", "Express"],
    lookingFor: "yourProject",
    activeProjects: [
      {
        title: "Project 1",
        description: "A project that I am working on",
      },
      {
        title: "Project 2",
        description: "A project that I am working on",
      },
    ],
  },
  {
    email: "janeDoe@gmail.com",
    name: "Jane Doe",
    image: "https://randomuser.me/api/portraits/women/64.jpg",
    linkedIn: "https://www.linkedin.com/in/jane-doe",
    github: "https://www.github.com/janeDoe",
    personalWebsite: "https://www.janeDoe.com",
    about:
      "I am a software engineer with experience in backend development. I am passionate about building scalable and efficient systems.",
    location: "New York",
    zip: "10001",
    age: 32,
    employer: "Microsoft",
    technologies: ["Java", "Spring Boot", "MySQL"],
    lookingFor: "newOpportunities",
    activeProjects: [
      {
        title: "Project 3",
        description: "A project that I am working on",
      },
      {
        title: "Project 4",
        description: "A project that I am working on",
      },
    ],
  },
  {
    email: "johnSmith@gmail.com",
    name: "John Smith",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    linkedIn: "https://www.linkedin.com/in/john-smith",
    github: "https://www.github.com/johnSmith",
    personalWebsite: "https://www.johnSmith.com",
    about:
      "I am a front-end developer with expertise in React and Angular. I love creating intuitive user interfaces and solving complex problems.",
    location: "London",
    zip: "SW1A 1AA",
    age: 30,
    employer: "Facebook",
    technologies: ["React", "Angular", "JavaScript"],
    lookingFor: "collaboration",
    activeProjects: [
      {
        title: "Project 5",
        description: "A project that I am working on",
      },
      {
        title: "Project 6",
        description: "A project that I am working on",
      },
    ],
  },
  {
    email: "sarahJohnson@gmail.com",
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    linkedIn: "https://www.linkedin.com/in/sarah-johnson",
    github: "https://www.github.com/sarahJohnson",
    personalWebsite: "https://www.sarahJohnson.com",
    about:
      "I am a backend developer with experience in Python and Django. I enjoy building robust and scalable web applications.",
    location: "Berlin",
    zip: "10115",
    age: 26,
    employer: "Amazon",
    technologies: ["Python", "Django", "PostgreSQL"],
    lookingFor: "remoteWork",
    activeProjects: [
      { title: "Project 7", description: "A project that I am working on" },
      { title: "Project 8", description: "A project that I am working on" },
    ],
  },
  {
    email: "alexWilliams@gmail.com",
    name: "Alex Williams",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    linkedIn: "https://www.linkedin.com/in/alex-williams",
    github: "https://www.github.com/alexWilliams",
    personalWebsite: "https://www.alexWilliams.com",
    about:
      "I am a full stack developer with expertise in JavaScript and Node.js. I enjoy building scalable and performant web applications. I am currently looking for freelance projects.",
    location: "New York",
    zip: "10001",
    age: 29,
    employer: "",
    technologies: ["JavaScript", "Node.js", "MongoDB", "Express"],
    lookingFor: "freelanceProjects",
    activeProjects: [
      { title: "Project 9", description: "A project that I am working on" },
      { title: "Project 10", description: "A project that I am working on" },
    ],
  },
  {
    email: "juliaSmith@gmail.com",
    name: "Julia Smith",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    linkedIn: "https://www.linkedin.com/in/julia-smith",
    github: "https://www.github.com/juliaSmith",
    personalWebsite: "https://www.juliaSmith.com",
    about:
      "I am a software engineer with experience in frontend development. I am passionate about creating user-friendly interfaces and delivering high-quality code.",
    location: "San Francisco",
    zip: "94110",
    age: 27,
    employer: "Apple",
    technologies: ["React", "JavaScript", "CSS"],
    lookingFor: "frontendOpportunities",
    activeProjects: [
      { title: "Project 11", description: "A project that I am working on" },
      { title: "Project 12", description: "A project that I am working on" },
    ],
  },
  {
    email: "davidJohnson@gmail.com",
    name: "David Johnson",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    linkedIn: "https://www.linkedin.com/in/david-johnson",
    github: "https://www.github.com/davidJohnson",
    personalWebsite: "https://www.davidJohnson.com",
    about:
      "I am a backend developer with expertise in Python and Flask. I enjoy building scalable and efficient web applications.",
    location: "London",
    zip: "SW1A 1AA",
    age: 31,
    employer: "Gov",
    technologies: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "Docker", "Kubernetes", "AWS", "GCP"],
    lookingFor: "backendOpportunities",
    activeProjects: [
      { title: "Project 13", description: "A project that I am working on" },
      { title: "Project 14", description: "A project that I am working on" },
    ],
  },
];


const insertDummyData = async () => {

  try {
    // connect to mongo
    await connectToMongo();

    // insert dummy data
    await User.insertMany(dummyData);
    console.log("Dummy data inserted");
  } catch (error) {
    console.error("Error inserting dummy data:", error);
  }
};

insertDummyData();