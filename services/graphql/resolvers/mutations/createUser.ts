import { AppSyncResolverHandler } from "aws-lambda";

import { Mutation, MutationCreateUserArgs } from "../../generated/graphql-types";
import { db } from "../../lib/db";

export const handler: AppSyncResolverHandler<MutationCreateUserArgs, Mutation["createUser"]> = async (event) => {
  const { arguments: { input } } = event;
  const newUser = await db.collection("users").insertOne({
    username: input.username,
    name: input.name,
  });

  return {
    id: newUser.insertedId.toString(),
    username: input.username,
    name: input.name,
  };
}