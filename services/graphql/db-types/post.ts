import { ObjectId } from "mongodb";
import { User } from "./user";

export type Post = {
  _id: ObjectId;
  title: string;
  // author: User;
};
