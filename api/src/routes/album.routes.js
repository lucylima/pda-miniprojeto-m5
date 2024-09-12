import { Router } from "express";
import { randomAlbum } from "../controller/album.controller.js";

const albumRouter = Router();

albumRouter.get("/album", randomAlbum);

export { albumRouter };
