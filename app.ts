import 'module-alias/register'
import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import createRoutes from './routes'

import dotenv from 'dotenv'
dotenv.config()

const PORT = 5000
const mongoUrl =
  process.env.MONGODB_URL || 'mongodb://localhost:27017/conspects'

const app = express()

app.use(cors())
app.use(express.json())

const routers = createRoutes()

app.use('/', routers.authRouter)

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Not found' })
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
