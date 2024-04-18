import { Router } from 'express'
import { createAuthRouter } from './auth'
import { createUserRouter } from './users'

enum RouterEnum {
  AUTH_ROUTERS = 'authRouter',
  USER_ROUTER = 'userRouter',
}

const createRoutes = (): Record<RouterEnum, Router> => {
  const authRouter = createAuthRouter()
  const userRouter = createUserRouter()

  return {
    authRouter,
    userRouter,
  }
}

export default createRoutes
