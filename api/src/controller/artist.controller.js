import { Artist } from "../model/Artist.model.js";
import { v4 as uuidv4 } from "uuid";
const artists = [
  {
    id: uuidv4(),
    artist: "7038634357",
  },
  {
    id: uuidv4(),
    artist: "lucy eris",
  },
  {
    id: uuidv4(),
    artist: "Caroline Polachek",
  },
  {
    id: uuidv4(),
    artist: "Mitski",
  },
  {
    id: uuidv4(),
    artist: "Malibu",
  },
  {
    id: uuidv4(),
    artist: "Ecco2k",
  },
  {
    id: uuidv4(),
    artist: "Bladee",
  },
  {
    id: uuidv4(),
    artist: "Chico Buarque",
  },
  {
    id: uuidv4(),
    artist: "Yeule",
  },
  {
    id: uuidv4(),
    artist: "Lady Gaga",
  },
  {
    id: uuidv4(),
    artist: "Melanie Martinez",
  },
  {
    id: uuidv4(),
    artist: "Amaarae",
  },
];

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