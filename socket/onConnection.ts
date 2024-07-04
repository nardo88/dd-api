import { Server, Socket } from 'socket.io'

export interface AppSocket extends Socket {
  userId: string
}

export const onConnection = (io: Server, socket: AppSocket) => {
  const { userId } = socket
  socket.join(userId)
}
