import { AppSyncResolverHandler } from "aws-lambda";
import { ObjectId } from "mongodb";

import { Post } from "../../db-types/post";
import { Mutation, MutationCreatePostArgs } from "../../generated/graphql-types";
import { db } from "../../lib/db";

// @ts-ignore
export const handler: AppSyncResolverHandler<MutationCreatePostArgs, Mutation["createPost"]> = async (event) => {
  const { arguments: { input } } = event;
  const newPost = await db.collection("posts").insertOne({
    title: input.title,
    authorId: new ObjectId(input.authorId),
  });

  console.log();

  return {
    id: newPost.insertedId.toString(),
    title: input.title,
    _authorId: input.authorId,
  };
}