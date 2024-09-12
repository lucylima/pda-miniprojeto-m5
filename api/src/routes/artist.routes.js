import { Router } from 'express'
import { randomArtist, newArtist } from '../controller/artist.controller.js'

const artistRouter = Router()

artistRouter.get('/artist', randomArtist)
artistRouter.post('/artist', newArtist)

export { artistRouter }