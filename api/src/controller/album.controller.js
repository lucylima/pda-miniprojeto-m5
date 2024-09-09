import { Album } from "../model/Album.model.js"
import { v4 as uuidv4 } from "uuid"


const randomAlbum = () => {
  const random = Math.floor(Math.random() * albums.length)
  const response = albums[random]
  return response
}

const showSomeAlbums = (number) => {
  let list = [];
  for (let index = 0; index < number; index++) {
    const random = Math.floor(Math.random() * albums.length)
    list.push(albums[random]);
  }
  const response = list;
  return response;
};

const createAlbum = (title, artist, release, genre) => {
  const newAlbum = new Album(title, artist, release, genre);
  albums.push(newAlbum)
  return newAlbum
};

const deleteAlbum = (id) => {
  let albumIndex = albums.findIndex(album => album.id == id);
  const deletedAlbum = albums.find(album => album.id == id)
  albums.splice(albumIndex, 1);
  return deletedAlbum
};

export { randomAlbum, showSomeAlbums, createAlbum, deleteAlbum }