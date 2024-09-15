import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { songRouter } from './routes/song.routes.js'
import { artistRouter } from './routes/artist.routes.js'
import { albumRouter } from './routes/album.routes.js'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use(songRouter)
app.use(artistRouter)
app.use(albumRouter)

app.listen(port, () => {
  console.log(`running on => ${port}`)
})