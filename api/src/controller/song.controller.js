import { Song } from "../model/Song.model.js"
import { v4 as uuidv4 } from 'uuid'

const song = [
  {
    id: uuidv4(),
    title: "Perfect Night",
    artist: "7038634357",
    album: "Neo Seven",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Acolyte",
    artist: "7038634357",
    album: "Neo Seven",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Winded",
    artist: "7038634357",
    album: "Neo Seven",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Overbraid",
    artist: "7038634357",
    album: "Neo Seven",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Eraser",
    artist: "7038634357",
    album: "Neo Seven",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Square Heart",
    artist: "7038634357",
    album: "Neo Seven",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Everytime",
    artist: "7038634357",
    album: "Neo Seven",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Ground (up)",
    artist: "7038634357",
    album: "My Way Out",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Display",
    artist: "7038634357",
    album: "My Way Out",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Automatic",
    artist: "7038634357",
    album: "My Way Out",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Tarmac",
    artist: "7038634357",
    album: "My Way Out",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Avoid",
    artist: "7038634357",
    album: "My Way Out",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Dawn",
    artist: "7038634357",
    album: "My Way Out",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Menu",
    artist: "7038634357",
    album: "Electric",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Runway",
    artist: "7038634357",
    album: "Electric",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Overalign",
    artist: "7038634357",
    album: "Electric",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Sink",
    artist: "7038634357",
    album: "Electric",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Rose",
    artist: "7038634357",
    album: "Electric",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Daybreak",
    artist: "7038634357",
    album: "Electric",
    genre: "Eletronic",
  },
  {
    id: uuidv4(),
    title: "Audio",
    artist: "Labrinth Sia Diplo",
    album: "LSD",
    genre: "Pop",
  },
  {
    id: uuidv4(),
    title: "Construção",
    artist: "Chico Buarque",
    album: "Construção",
    genre: "MPB",
  },
  {
    id: uuidv4(),
    title: "Desire",
    artist: "Ozzy Ousborne",
    album: "No more tears",
    genre: "Rock",
  },
];

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