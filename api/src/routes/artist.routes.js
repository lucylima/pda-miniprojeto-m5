import { Router } from 'express'
import { randomArtist } from '../controller/artist.controller.js'

const artistRouter = Router()

artistRouter.get('/artist', (req, res) => {
  const response = randomArtist()
  res.json({ response })
})

export { artistRouter }