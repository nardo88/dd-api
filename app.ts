import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const PORT = 5000
const mongoUrl =
  process.env.MONGODB_URL || 'mongodb://localhost:27017/conspects'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
  res.send(`<h1>It's work</h1>`)
})
app.get('/test', (req: Request, res: Response) => {
  res.send(`<h1>It's work!!!!/h1>`)
})

async function start() {
  try {
    await mongoose.connect(mongoUrl)

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
