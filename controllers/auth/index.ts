import { Request, Response } from 'express'
import { auth } from './models/auth'

export class AuthController {
  auth = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body

      const { status, message, token } = await auth({
        email,
        password,
      })

      if (message) {
        return res.status(status).json({ message })
      }

      res.cookie('token', token, { httpOnly: true })
      res.sendStatus(200)
    } catch (e: any) {
      res.status(500).json({ e: e.message, message: 'Что то пошло не так!' })
    }
  }
}
