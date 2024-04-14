import { Router } from 'express'
import { createAuthRouter } from './auth'

enum RouterEnum {
  AUTH_ROUTERS = 'authRouter',
}

const createRoutes = (): Record<RouterEnum, Router> => {
  const authRouter = createAuthRouter()

  return {
    authRouter,
  }
}

export default createRoutes
