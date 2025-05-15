import express from "express";
import { getLoginController, logoutController } from "../../controllers/auth/authenController.js";

const authenRouter = express.Router();

authenRouter.post("/login", getLoginController);
authenRouter.post("/logout", logoutController);

export default authenRouter;