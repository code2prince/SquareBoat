import express from "express";

export const squareBoatCandidateRoutes = express.Router();
import { candidateValidationRegistration } from "../Controller/candidateJoi.js";
import {
  candidateLogin,
  candidateRegisteration,
  getAllCurrentOpening,
  candidateLogout,
} from "../Controller/candidate.js";

squareBoatCandidateRoutes.post(
  "/Registeration",
  candidateValidationRegistration,
  candidateRegisteration
);
squareBoatCandidateRoutes.post("/candidateLogin", candidateLogin);
squareBoatCandidateRoutes.get("/getAllCurrentOpening", getAllCurrentOpening);
squareBoatCandidateRoutes.post("/candidateLogout", candidateLogout);
