import { Router } from 'express'
import { AuthController } from '../controllers/auth'
import { ArticleController } from '../controllers/articles'
import { authStrict } from '../middleware/auth.middleware'

export const createArticleRouter = (): Router => {
  const router = Router()
  const controller = new ArticleController()

  router.get('/', authStrict, controller.getList)
  router.get('/catalog', controller.getCatalog)

  return router
}
