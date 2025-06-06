import express from "express";
import dbConnect from "./DataBase/db.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import { squareBoatCandidateRoutes } from "./Router/candidateRouter.js";
import { squareBoatRecruiterRoutes } from "./Router/recruiterRouter.js";

const db = await dbConnect();
const app = express();
const port = 4000;

dotenv.config();
app.use(express.json());

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));

app.get("/", (req, res) => {
  const view = `<h1>API Home Page</h1>`;
  res.send(view);
});
app.use("/candidate", squareBoatCandidateRoutes);
app.use("/recruiter", squareBoatRecruiterRoutes);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

export default db;
