import axios from 'axios'
import 'dotenv/config'
import { database } from '../database/database.js'

const lastFmAxios = axios.create({
  baseURL:
    `https://ws.audioscrobbler.com/2.0/` +
    `?method=artist.gettoptracks` +
    `&api_key=${process.env.last_fm}` +
    `&format=json` +
    `&limit=20`
})

const randomNumber = async () => {
  try {
    const artistsLength = await database.artist.count()
    const number = Math.floor(Math.random() * (artistsLength - 1) + 1)
    return number
  } catch (error) {
    return error
  }
}

const makeTrackRequest = async (artist) => {
  const response = await lastFmAxios(`&artist=${artist}`)
  const random = Math.floor(Math.random() * (20 - 0) + 0)
  const {
    toptracks: { track }
  } = response.data
  return track[random]
}

const randomSong = async (req, res) => {
  try {
    const artist = await database.artist.findUnique({
      where: {
        id: await randomNumber()
      }
    })
    const response = await makeTrackRequest(artist.name)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export { randomSong }
