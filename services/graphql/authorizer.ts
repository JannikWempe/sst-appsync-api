import { AppSyncAuthorizerHandler } from "aws-lambda";
import { getAccessToken } from "./lib/access-token";

type ResolverContext = {
  userId: string;
}

export const handler: AppSyncAuthorizerHandler<ResolverContext> = async (event) => {
  console.log(`event >`, JSON.stringify(event, null, 2))

  const {
    authorizationToken,
  } = event

  const tokenItem = await getAccessToken(authorizationToken);

  if (!tokenItem) {
    return {
      isAuthorized: false,
    }
  }

  const response = {
    isAuthorized: true,
    resolverContext: {
      userId: tokenItem.userId.toString(),
    },
    ttlOverride: 0,
  }
  console.log(`response >`, JSON.stringify(response, null, 2))
  return response

}