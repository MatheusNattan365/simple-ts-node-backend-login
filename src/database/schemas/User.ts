import { Document, Model, model, Schema } from "mongoose";

interface UserProps extends Document {
  name?: string;
  email: string;
  password: string;
  isAdmin: boolean;
  convenios?: string[];
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
  convenios: {
    type: [String],
  },
});

const User: Model<UserProps> = model("User", UserSchema);

export { User };
