import { database } from '../database/database.js'

const randomNumber = async () => {
  try {
    const artistsLength = await database.artist.count()
    const number = Math.floor(Math.random() * (artistsLength - 1) + 1)
    return number
  } catch (error) {
    return error
  }
}

export { randomNumber }
