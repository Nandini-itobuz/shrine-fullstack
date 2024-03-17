import express from "express";
import {currentEventPost} from "../../controllers/PagesControllers/EventsControllers.js"
const eventRouter  = express.Router();

eventRouter.route("/").post(currentEventPost);
export default eventRouter;