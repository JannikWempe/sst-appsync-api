import { AppSyncResolverHandler } from "aws-lambda";

import { Query, QueryUserArgs } from "../../generated/graphql-types";
import { getUserById } from "../../lib/get-user";


export const handler = async (event: any) => {
  const { source: { _authorId } } = event;
  console.log('event', event);

  console.log('authorId', _authorId);

  const author = await getUserById(_authorId);

  if (!author) {
    // field is required
    throw new Error("Author not found.")
  }

  return {
    id: author._id.toString(),
    username: author.username,
    name: author.name,
  };
}