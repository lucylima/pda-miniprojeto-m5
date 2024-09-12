import { database } from '../database/database.js'

const randomArtist = (req, res) => {
  try {
  } catch (error) {
    return res.status(400).json({ erro })
  }
}

const newArtist = async (req, res) => {
  try {
    const { artist } = req.body
    const response = await database.artist.create({
      data: {
        name: artist
      }
    })
    return res.status(201).json({ response })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export { randomArtist, newArtist }
