import { v4 as uuidv4 } from "uuid"
export class Album {
  constructor(title, artist, release, genre){
    this.id = uuidv4()
    this.title = title
    this.artist = artist
    this.release = release
    this.genre = genre
  }
}