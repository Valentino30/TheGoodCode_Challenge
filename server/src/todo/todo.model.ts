import { Document, Schema } from 'mongoose';

export const TodoSchema = new Schema(
  {
    name: { type: String, required: true },
    selected: { type: Boolean, default: false },
  },
  // Use the options below to optimize data format for FE requests
  {
    versionKey: false,
    id: true,
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  },
);

export interface Todo extends Document {
  id: string;
  name: string;
  selected: boolean;
}
