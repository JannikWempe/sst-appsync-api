import { AppSyncResolverHandler } from "aws-lambda";

import { Query, QueryUserArgs } from "../../generated/graphql-types";
import { getUserById } from "../../lib/get-user";


export const handler: AppSyncResolverHandler<QueryUserArgs, Query["user"]> = async (event) => {
  const { arguments: { id } } = event;
  const user = await getUserById(id);

  if (!user) {
    return null;
  }

  return {
    id: user._id.toString(),
    username: user.username,
    name: user.name,
  };
}