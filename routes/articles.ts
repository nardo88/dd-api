import { Router } from 'express'
import { AuthController } from '../controllers/auth'
import { ArticleController } from '../controllers/articles'
import { authStrict } from '../middleware/auth.middleware'

export const createArticleRouter = (): Router => {
  const router = Router()
  const controller = new ArticleController()

  router.get('/', authStrict, controller.getList)
  router.get('/get-one/:id', authStrict, controller.getForView)
  router.get('/catalog', controller.getCatalog)
  router.get('/get-for-edit/:id', authStrict, controller.getForEdit)

  router.post('/create', authStrict, controller.create)

  return router
}
