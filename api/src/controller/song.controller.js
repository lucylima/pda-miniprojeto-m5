import axios from 'axios'

const lastFmAxios = axios.create({
  baseURL:
    `https://ws.audioscrobbler.com/2.0/` +
    `?method=artist.gettoptracks` +
    `&api_key=${process.env.last_fm}` +
    `&format=json` +
    `&limit=1`
})

const makeTrackRequest = async (artist) => {
  const response = await lastFmAxios(`&artist=${artist}`)
  return response.data
}

const randomSong = async (req, res) => {
  try {
    const response = await makeTrackRequest('7038634357')
    return res.status(200).json({ response })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export { randomSong }
