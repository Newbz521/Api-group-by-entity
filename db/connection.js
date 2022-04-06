import mongoose from "mongoose";
const DATABASE_NAME = "prj5";

let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true };
let connectionString = process.env.MONGODB_URI;

const MONGODB_URI =
  connectionString || `mongodb://127.0.0.1:27017/${DATABASE_NAME}`;

// Uncomment to debug Mongoose queries
mongoose.set("debug", true);

// This is for Model.findByIdAndUpdate method, specifically the so that { new: true} is the default
mongoose.set("returnOriginal", false);

// Setup connection for MongoDB
mongoose.connect(
  MONGODB_URI,
  mongooseConfig,
  () => console.log(`success connected to the database`),
  (err) => console.log(err)
);

// Listen to MongoDB events
// Learn more: https://mongoosejs.com/docs/connections.html#connection-events
mongoose.connection.on("disconnected", () =>
  console.log(`Disconnected from MongoDB!`)
);

// Listen to any errors while connected to MongoDB
// Learn more: https://mongoosejs.com/docs/connections.html#error-handling
mongoose.connection.on("error", (error) =>
  console.error(`MongoDB connection error: ${error}`)
);

// Export the connection
export default mongoose.connection;
