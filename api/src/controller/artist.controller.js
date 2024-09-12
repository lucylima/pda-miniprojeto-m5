import { Artist } from "../model/Artist.model.js";

const randomArtist = () => {
  const random = Math.floor(Math.random() * artists.length)

  const response = artists[random];
  return response;
};


export { randomArtist, showSomeArtists, createArtist, deleteArtist };