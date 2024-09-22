import { Router } from "express";
import { createSeminar, updateSeminar, deleteSeminar, findAllSeminar } from "../controllers/seminar.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router()

router.route("/createSeminar").post(verifyJWT, createSeminar)

router.route("/updateSeminar").post(verifyJWT, updateSeminar)

router.route("/deleteSeminar").delete(verifyJWT, deleteSeminar)

router.route("/findAllSeminar").get(verifyJWT, findAllSeminar)


export default router
