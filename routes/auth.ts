import { Router } from 'express'
import { AuthController } from '../controllers/auth'

export const createAuthRouter = (): Router => {
  const router = Router()
  const controller = new AuthController()

  router.post('/signin', controller.signin)
  router.post('/signup', controller.signup)

  return router
}
