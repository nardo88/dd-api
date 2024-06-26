import { Request, Response } from 'express'
import { pagination } from '../../helpers/pagination'
import { getCatalog } from './modules/getCatalog'
import { UserData } from '../../customTypes/user'
import { getLestForAdmin } from './modules/getLestForAdmin'
import { escapingCharacters } from '../../helpers/escapingCharacters'
import Articles from '../../models/Articles/Articles'

export class ArticleController {
  getCatalog = async (req: Request, res: Response) => {
    try {
      const { page, pageCount } = pagination(req.query)

      const { data, total } = await getCatalog({ page, pageCount })

      res.json({ data, total })
    } catch (e: any) {
      res
        .status(500)
        .json({ details: e.message, message: 'Что то пошло не так!' })
    }
  }
  getList = async (req: Request, res: Response) => {
    try {
      const { roles } = req.user as UserData
      if (!roles.includes('admin')) {
        return res.status(403).json({ message: 'Access denied' })
      }
      const { page, pageCount } = pagination(req.query)
      const { category = '', title = '' } = req.query
      const { list, total } = await getLestForAdmin({
        page,
        limit: pageCount,
        category: escapingCharacters(category.toLocaleString()),
        title: escapingCharacters(title.toLocaleString()),
      })

      return res.json({ list, total })
    } catch (e: any) {
      res
        .status(500)
        .json({ details: e.message, message: 'Что то пошло не так!' })
    }
  }
  getForEdit = async (req: Request, res: Response) => {
    try {
      const { roles } = req.user as UserData
      if (!roles.includes('admin')) {
        return res.status(403).json({ message: 'Access denied' })
      }
      const { id } = req.params

      const article = await Articles.findOne({ _id: id }).lean()

      return res.json({ ...article })
    } catch (e: any) {
      res
        .status(500)
        .json({ details: e.message, message: 'Что то пошло не так!' })
    }
  }
}
