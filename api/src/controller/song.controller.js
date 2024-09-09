import { Song } from "../model/Song.model.js"
import { v4 as uuidv4 } from 'uuid'

const randomSong = () => {
  const random = Math.floor(Math.random() * song.length)
  const response = song[random];
  return response;
};

const showSomeSongs = (number) => {
  let list = [];
  for (let index = 0; index < number; index++) {
    const random = Math.floor(Math.random() * song.length)
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
  let songIndex = song.findIndex(song => song.id == id);
  const deletedSong = song.find(song => song.id == id)
  song.splice(songIndex, 1);
  return deletedSong
};

export { randomSong, showSomeSongs, createSong, deleteSong };