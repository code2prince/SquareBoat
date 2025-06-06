import bodyParser from "body-parser";
import { recValidationRegistration } from "../Controller/recJoi";
import {
  postJobOpening,
  recruiterRegisteration,
  recruiterLogin,
  recruiterLogout,
} from "../Controller/Recruiter";

const squareBoatRecruiterRoutes = express.Router();
squareBoatRoutes.post(
  "/recruiterRegisteration",
  recValidationRegistration,
  recruiterRegisteration
);
squareBoatRoutes.post("/recruiterLogin", recruiterLogin);
squareBoatRoutes.post("/postJobOpening", postJobOpening);
squareBoatRoutes.post("/recruiterLogout", recruiterLogout);

export default squareBoatRecruiterRoutes;
