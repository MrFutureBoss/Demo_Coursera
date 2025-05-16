import express from "express";
import { getLoginController, logoutController, profileController } from "../../controllers/auth/authenController.js";
import { verifyAccessToken } from "../../middlewares/authentication.js";

const authenRouter = express.Router();

authenRouter.post("/login", getLoginController);
authenRouter.post("/logout", logoutController);
authenRouter.get("/profile/:userId", verifyAccessToken, profileController);

export default authenRouter;