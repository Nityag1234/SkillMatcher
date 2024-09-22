import { Router } from "express";
import { createInterview, updateInterview, deleteInterview, getInterviewById, getAllInterviews } from "../controllers/interview.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/createInterview").post(verifyJWT, createInterview);

router.route("/updateInterview/:id").put(verifyJWT, updateInterview);

router.route("/deleteInterview/:id").delete(verifyJWT, deleteInterview);

router.route("/getInterview/:id").get(verifyJWT, getInterviewById);

router.route("/getAllInterviews").get(verifyJWT, getAllInterviews);

export default router;
