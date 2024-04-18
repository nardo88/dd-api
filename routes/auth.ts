import { AuthController } from '@controllers/auth'
import { Router } from 'express'

export const createAuthRouter = (): Router => {
  const router = Router()
  const controller = new AuthController()

  router.post('/signin', controller.auth)
  router.post('/signup', controller.signup)

  return router
}
