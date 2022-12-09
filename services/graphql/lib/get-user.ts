import { ObjectId } from "mongodb";
import { db } from "./db";

export const getUserById = async (id: string) => {
  const user = await db.collection("users").findOne({ _id: new ObjectId(id) });
  return user;
};