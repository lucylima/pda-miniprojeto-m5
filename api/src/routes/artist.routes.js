import { Router } from 'express'
import { randomArtist } from '../controller/artist.controller.js'

const artistRouter = Router()

artistRouter.get('/artist', randomArtist)

export { artistRouter }