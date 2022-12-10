import { AppSyncResolverHandler } from "aws-lambda";

import { Mutation, MutationCreateTokenArgs } from "../../generated/graphql-types";
import { createAccessToken } from "../../lib/access-token";

export const handler: AppSyncResolverHandler<MutationCreateTokenArgs, Mutation["createToken"]> = async (event) => {
  const { arguments: { input } } = event;
  const token = await createAccessToken(input.userId);

  return token;
}