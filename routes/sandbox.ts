import { Router } from 'express'
import { authStrict } from '../middleware/auth.middleware'
import { SandboxController } from '../controllers/sandbox'

export const createSandboxRouter = (): Router => {
  const router = Router()
  const controller = new SandboxController()

  router.get('/get-list', authStrict, controller.getList)
  router.get('/:id', authStrict, controller.getOne)

  router.post('/', authStrict, controller.insert)

  router.put('/:id', authStrict, controller.update)

  router.delete('/:id', authStrict, controller.remove)

  return router
}
