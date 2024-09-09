import { Router } from "express";
import { randomAlbum, showSomeAlbums, deleteAlbum, createAlbum } from "../controller/album.controller.js";

const albumRouter = Router();

albumRouter.get("/album", (req, res) => {
  const response = randomAlbum();
  res.json({ response });
});

albumRouter.get("/album/:number", (req, res) => {
  const { number } = req.params;
  const response = showSomeAlbums(number);
  res.json({ response });
});

albumRouter.post("/album", (req, res) => {
  const { title, artist, release, genre } = req.body;
  const newAlbum = createAlbum(title, artist, release, genre);
  res.status(200).json({ newAlbum });
});

albumRouter.delete("/album/:id", (req,res) => {
  const { id } = req.params
  const deletedAlbum = deleteAlbum(id)
  res.status(200).json({ deletedAlbum })
})

export { albumRouter };
