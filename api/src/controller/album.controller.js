import { randomNumber } from '../utils/randomNumber.js'
import { database } from '../database/database.js'
import axios from 'axios'
import 'dotenv/config'

const albumAxios = axios.create({
  baseURL: `https://ws.audioscrobbler.com/2.0`
})

const albumRequest = async (artist) => {
  const response = await albumAxios(
    `?method=artist.gettopalbums` +
      `&api_key=${process.env.last_fm}` +
      `&artist=${artist}` +
      `&limit=25` +
      `&format=json`
  )
  const random = Math.floor(Math.random() * (20 - 0) + 0)
  const {
    topalbums: { album }
  } = response.data
  return album[random]
}

const randomAlbum = async (req, res) => {
  try {
    const artist = await database.artist.findUnique({
      where: {
        id: await randomNumber()
      }
    })
    const response = await albumRequest(artist.name)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export { randomAlbum }
