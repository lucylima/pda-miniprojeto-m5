import { v4 as uuidv4 } from "uuid"
export class Song {
  constructor(title, artist, album, genre){
    this.id = uuidv4()
    this.title = title
    this.artist = artist
    this.album = album
    this.genre = genre
  }
}