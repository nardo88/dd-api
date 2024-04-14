import express, { Request, Response } from 'express'
import cors from 'cors'

const PORT = 5000
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send(`<h1>It's work</h1>`)
})
app.get('/test', (req: Request, res: Response) => {
  res.send(`<h1>It's work!!!!/h1>`)
})

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`)
})
