import { database } from '../database/database.js'
import { randomNumber } from '../utils/randomNumber.js'
import axios from 'axios'
import 'dotenv/config'

const artistAxios = axios.create({
  baseURL: `https://ws.audioscrobbler.com/2.0`
})

const artistRequest = async (artist) => {
  const response = await artistAxios(
    `?method=artist.getinfo` +
      `&api_key=${process.env.last_fm}` +
      `&format=json&artist=${artist}`
  )
  return response.data
}

const randomArtist = async (req, res) => {
  try {
    const artist = await database.artist.findUnique({
      where: {
        id: await randomNumber()
      }
    })
    const response = await artistRequest(artist.name)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(400).json(error)
  }
}

export { randomArtist }
