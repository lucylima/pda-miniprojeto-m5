import { database } from "../database/database.js";
import { Song } from "../model/Song.model.js";
import { v4 as uuidv4 } from "uuid";

const randomSong = async (req, res) => {
  const random = Math.floor(Math.random() * (await database.song.count({})));
  const response = await database.song.findUnique({
    where: {
      id: random,
    },
  });
  return res.status(200).json({ response, random });
};

const showSomeSongs = (number) => {
  let list = [];
  for (let index = 0; index < number; index++) {
    const random = Math.floor(Math.random() * song.length);
    list.push(song[random]);
  }
  const response = list;
  return response;
};

const createSong = (title, artist, album, genre) => {
  const newSong = new Song(title, artist, album, genre);
  song.push(newSong);
  return newSong;
};

const deleteSong = (id) => {
  let songIndex = song.findIndex((song) => song.id == id);
  const deletedSong = song.find((song) => song.id == id);
  song.splice(songIndex, 1);
  return deletedSong;
};

export { randomSong, showSomeSongs, createSong, deleteSong };
