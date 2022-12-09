import { ObjectId } from "mongodb";

export type User = {
  _id: ObjectId;
  username: string;
  name: string;
};