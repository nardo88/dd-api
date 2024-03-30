// eslint-disable-next-line
import express, { Request, Response } from 'express'

const PORT = 4000
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send("<h1>It's work</h1>")
})

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`)
})
