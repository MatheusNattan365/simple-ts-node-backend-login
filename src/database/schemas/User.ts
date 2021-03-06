import { Document, Model, model, Schema } from "mongoose";

export interface UserProps extends Document {
  name?: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

const UserSchema = new Schema({
  name: {
    type: String,
    default: "User",
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User: Model<UserProps> = model("User", UserSchema);

export { User };
