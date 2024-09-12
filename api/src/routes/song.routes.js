import { Router } from 'express'
import { randomSong } from '../controller/song.controller.js'

const songRouter = Router()

songRouter.get("/song", randomSong)

export { songRouter }