import { database } from '../database/database.js'
import { randomNumber } from '../utils/randomNumber.js'
import axios from 'axios'

const artistAxios = axios.create({
  baseURL:
    `https://ws.audioscrobbler.com/2.0/` +
    `?method=artist.getinfo` +
    `&api_key=${process.env.last_fm}` +
    `&format=json`
})

const requestArtist = async (artist) => {
  const response = await artistAxios(`&artist=${artist}`)
  const {
    artist: { name, url, image }
  } = response.data
  return artist
}

const randomArtist = async (req, res) => {
  try {
    const artist = await database.artist.findUnique({
      where: {
        id: await randomNumber()
      }
    })
    const response = await requestArtist(artist.name)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export { randomArtist }
