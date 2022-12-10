import { ObjectId } from "mongodb";
import { db } from "./db";

export const getAccessToken = async (token: string) => {
  const tokenItem = await db.collection("tokens").findOne({ token });
  return tokenItem;
}

export const createAccessToken = async (userId: string) => {
  const token = Math.random().toString(36).slice(2);
  await db.collection("tokens").insertOne({ token, userId: new ObjectId(userId) });
  return token;
}