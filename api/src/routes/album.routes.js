import { Router } from "express";
import { randomAlbum } from "../controller/album.controller.js";

const albumRouter = Router();

albumRouter.get("/album", (req, res) => {
  const response = randomAlbum();
  res.json({ response });
});

export { albumRouter };
