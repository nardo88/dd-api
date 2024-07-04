import 'module-alias/register'
import { createServer } from 'http'
import express, { Request, Response } from 'express'
import passport from 'passport'
import { Server, Socket } from 'socket.io'
import mongoose from 'mongoose'
import cors from 'cors'
import createRoutes from './routes'

import dotenv from 'dotenv'
import { socketAuthStrict } from './middleware/socket.middleware'
import { AppSocket, onConnection } from './socket/onConnection'
dotenv.config()

const PORT = 5000
const mongoUrl =
  process.env.MONGODB_URL || 'mongodb://localhost:27017/conspects'

const app = express()

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
)

app.use(express.json())
app.use(passport.initialize())

const server = createServer(app)

const io = new Server(server, {
  cors: {
    origin: '*',
  },
  serveClient: false,
})

io.use(socketAuthStrict)

io.on('connection', async (socket: Socket) => {
  console.log('socket: ', socket.id)
  await onConnection(io, socket as AppSocket)
})

const routers = createRoutes()

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'welcome to my app' })
})
app.use('/api/v1', routers.authRouter)
app.use('/api/v1/users', routers.userRouter)
app.use('/api/v1/articles', routers.catalogRouter)

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Rout not found' })
})

async function start() {
  try {
    await mongoose.connect(mongoUrl)

    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
