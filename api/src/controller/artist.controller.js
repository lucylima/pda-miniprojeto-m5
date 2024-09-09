import { Artist } from "../model/Artist.model.js";
import { v4 as uuidv4 } from "uuid";

const randomArtist = () => {
  const random = Math.floor(Math.random() * artists.length)

  const response = artists[random];
  return response;
};

const showSomeArtists = (number) => {
  let list = [];
  for (let index = 0; index < number; index++) {
    const random = Math.floor(Math.random() * artists.length)
    list.push(artists[random]);
  }
  const response = list;
  return response;
};

const createArtist = (artist) => {
  const newArtist = new Artist(artist);
  artists.push(newArtist);
  return newArtist;
};

const deleteArtist = (id) => {
  const artistIndex = artists.findIndex(artist => artist.id == id);
  const deletedArtist = artists.find(artist => artist.id == id)
  artists.splice(artistIndex, 1);
  return deletedArtist
};

export { randomArtist, showSomeArtists, createArtist, deleteArtist };