import mongoose, { Schema } from 'mongoose'
import { ISandbox } from './Sandbox.type'

const SandboxSettingsSchema = new Schema(
  {
    useTypeScript: Schema.Types.Boolean,
    useSass: Schema.Types.Boolean,
    useReact: Schema.Types.Boolean,
  },
  { _id: false, versionKey: false }
)

const SandboxSchema = new Schema(
  {
    _id: {
      type: Schema.Types.String,
      required: true,
    },
    title: {
      type: Schema.Types.String,
      required: true,
    },
    userId: {
      type: Schema.Types.String,
      required: true,
      ref: 'Users',
    },
    html: { type: Schema.Types.String },
    js: { type: Schema.Types.String },
    css: { type: Schema.Types.String },
    settings: SandboxSettingsSchema,
    createdAt: Schema.Types.Number,
    updatedAt: Schema.Types.Number,
  },
  {
    timestamps: true,
    versionKey: false,
    autoCreate: true,
    collection: 'sandbox',
  }
)

export default mongoose.model<ISandbox & mongoose.Document>(
  'Sandbox',
  SandboxSchema
)
