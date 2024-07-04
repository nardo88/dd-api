import jwt from 'jsonwebtoken'
import { Socket } from 'socket.io'
import { ExtendedError } from 'socket.io/dist/namespace'

import { UserData } from '../customTypes/user'

const JWT_SECRET = process.env.JWT_SECRET as string

export const socketAuthStrict = (
  socket: Socket,
  next: (err?: ExtendedError) => void
) => {
  try {
    const token = socket.handshake.headers.authorization

    if (!token) {
      socket.disconnect()
    } else {
      const decoded = jwt.verify(token, JWT_SECRET) as UserData
      // @ts-ignore
      socket.userId = decoded.userId
      next()
    }
  } catch (e) {
    socket.disconnect()
  }
}
