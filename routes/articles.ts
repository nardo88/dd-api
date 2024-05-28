import { Router } from 'express'
import { AuthController } from '../controllers/auth'
import { ArticleController } from '../controllers/articles'

export const createArticleRouter = (): Router => {
  const router = Router()
  const controller = new ArticleController()

  router.get('/', controller.getList)
  router.get('/catalog', controller.getCatalog)

  return router
}
