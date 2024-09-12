import { Album } from "../model/Album.model.js"

const randomAlbum = () => {
  const random = Math.floor(Math.random() * albums.length)
  const response = albums[random]
  return response
}

export { randomAlbum }