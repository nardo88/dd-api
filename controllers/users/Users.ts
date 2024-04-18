import { UserData } from 'customTypes/user'
import { Request, Response } from 'express'

export class UsersController {
  getUser = async (req: Request, res: Response) => {
    try {
      // const { userId } = req.user as UserData
      return res.sendStatus(200)
    } catch (e: any) {
      res
        .status(500)
        .json({ message: 'Что-то пошло не так', details: e.message || e })
    }
  }
}
