import { Request, Response } from 'express'
import { pagination } from '../../helpers/pagination'
import { UserData } from '../../customTypes/user'
import { getList } from './modules/getList'
import { escapingCharacters } from '../../helpers/escapingCharacters'
import { createId } from '../../helpers/createId'
import Sandbox from '../../models/Sandbox/Sandbox'
import { ErrorMessages } from '../../constants/errorCodes'

export class SandboxController {
  getList = async (req: Request, res: Response) => {
    try {
      const { userId } = req.user as UserData
      const { page, pageCount } = pagination(req.query)
      const { filter = '' } = req.query

      const result = await getList({
        page,
        pageCount,
        userId,
        filter: escapingCharacters(filter.toLocaleString()),
      })

      res.json(result)
    } catch (e: any) {
      res
        .status(500)
        .json({ details: e.message, message: 'Что то пошло не так!' })
    }
  }

  insert = async (req: Request, res: Response) => {
    try {
      const { userId } = req.user as UserData
      const { title, html, css, js, settings } = req.body

      if (!title?.trim())
        return res.status(400).json({ message: 'Есть не заполненные поля' })

      const id = createId()

      await Sandbox.create({
        _id: id,
        title,
        userId,
        html,
        css,
        js,
        settings,
      })

      res.json(id)
    } catch (e: any) {
      res
        .status(500)
        .json({ details: e.message, message: 'Что то пошло не так!' })
    }
  }

  getOne = async (req: Request, res: Response) => {
    try {
      const { userId } = req.user as UserData
      const { id } = req.params

      const current = await Sandbox.findOne({ _id: id, userId }).lean()
      if (!current)
        return res.status(404).json({ message: ErrorMessages.NOT_FOUND })

      res.json(current)
    } catch (e: any) {
      res
        .status(500)
        .json({ details: e.message, message: 'Что то пошло не так!' })
    }
  }

  update = async (req: Request, res: Response) => {
    try {
      const { userId } = req.user as UserData
      const { title, html, css, js, settings } = req.body
      const { id } = req.params

      const current = await Sandbox.findOne({ _id: id, userId })
      if (!current)
        return res.status(404).json({ message: ErrorMessages.NOT_FOUND })

      if (!title?.trim())
        return res.status(400).json({ message: 'Есть не заполненные поля' })

      current.title = title
      current.html = html
      current.css = css
      current.js = js
      current.settings = settings

      await current.save()

      res.sendStatus(200)
    } catch (e: any) {
      res
        .status(500)
        .json({ details: e.message, message: 'Что то пошло не так!' })
    }
  }

  remove = async (req: Request, res: Response) => {
    try {
      const { userId } = req.user as UserData
      const { id } = req.params

      const current = await Sandbox.findOneAndDelete({ _id: id, userId })
      if (!current)
        return res.status(404).json({ message: ErrorMessages.NOT_FOUND })

      res.sendStatus(200)
    } catch (e: any) {
      res
        .status(500)
        .json({ details: e.message, message: 'Что то пошло не так!' })
    }
  }
}
