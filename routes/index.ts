import { Router } from 'express'
import { createAuthRouter } from './auth'
import { createUserRouter } from './users'
import { createArticleRouter } from './articles'
import { createSandboxRouter } from './sandbox'

enum RouterEnum {
  AUTH_ROUTERS = 'authRouter',
  USER_ROUTER = 'userRouter',
  CATALOG_ROUTERS = 'catalogRouter',
  SANDBOX_ROUTERS = 'sandboxRouter',
}

const createRoutes = (): Record<RouterEnum, Router> => {
  const authRouter = createAuthRouter()
  const userRouter = createUserRouter()
  const catalogRouter = createArticleRouter()
  const sandboxRouter = createSandboxRouter()

  return {
    authRouter,
    userRouter,
    catalogRouter,
    sandboxRouter,
  }
}

export default createRoutes
