import { AppSyncResolverHandler } from "aws-lambda";
import { ObjectId } from "mongodb";

import { Query, QueryPostArgs } from "../../generated/graphql-types";
import { db } from "../../lib/db";

// @ts-ignore
export const handler: AppSyncResolverHandler<QueryPostArgs, Query["post"]> = async (event) => {
  const { arguments: { id } } = event;
  const post = await db.collection("posts").findOne({ _id: new ObjectId(id) });

  if (!post) {
    return null;
  }

  return {
    id: post._id.toString(),
    title: post.title,
    _authorId: post.authorId.toString(),
  };
}