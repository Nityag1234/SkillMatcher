import { Router } from "express";
import { createProject, updateProject, deleteProject, findAllProject } from "../controllers/project.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router()

router.route("/createProject").post(verifyJWT, createProject)

router.route("/updateProject").post(verifyJWT, updateProject)

router.route("/deleteProject").delete(verifyJWT, deleteProject)

router.route("/findAllProject").get(verifyJWT, findAllProject)


export default router
