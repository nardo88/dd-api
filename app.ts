import 'module-alias/register'
import express, { Request, Response } from 'express'

import cors from 'cors'

const PORT = 5000

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'welcome to my app' })
})

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Rout not found' })
})
async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
