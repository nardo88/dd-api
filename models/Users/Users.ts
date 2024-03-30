import mongoose, { Schema } from 'mongoose'
import { UsersType } from './Users.type'

const UsersSchema = new Schema(
  {
    _id: Schema.Types.String,
  },
  {
    timestamps: true,
    collection: 'clients',
    versionKey: false,
  }
)

export default mongoose.model<UsersType & mongoose.Document>(
  'Users',
  UsersSchema
)
