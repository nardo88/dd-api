import { Request, Response } from 'express'
import { pagination } from '../../helpers/pagination'
import { getCatalog } from './modules/getCatalog'

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
}
