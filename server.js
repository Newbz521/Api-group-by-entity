import db from "./db/connection.js";
import routes from "./index.js";

import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());

// Establish root
app.use("/", routes);
app.use(cors());

db.on("connected", () => {
  console.clear();
  console.log("Connected to MongoDB!");
  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(`Express server running in production on port ${PORT}\n\n`)
      : console.log(
          `Express server running in development on: http://localhost:${PORT}`
        );
  });
});
