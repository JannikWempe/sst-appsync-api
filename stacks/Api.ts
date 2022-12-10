import { StackContext, AppSyncApi, Function } from "@serverless-stack/resources";
import * as appsync from "@aws-cdk/aws-appsync-alpha";

export function Api({ stack }: StackContext) {

  const authorizer = new Function(stack, "Authorizer", {
    handler: "graphql/authorizer.handler",
    environment: { MONGODB_URI: process.env.MONGODB_URI! }
  });


  const api = new AppSyncApi(stack, "api", {
    schema: "services/graphql/schema.graphql",
    cdk: {
      graphqlApi: {
        authorizationConfig: {
          defaultAuthorization: {
            authorizationType: appsync.AuthorizationType.LAMBDA,
            lambdaAuthorizerConfig: {
              handler: authorizer,
            },
          },
        },
      },
    },
    defaults: {
      function: {
        environment: { MONGODB_URI: process.env.MONGODB_URI! },
      },
    },
    resolvers: {
      "Query    post": "graphql/resolvers/queries/post.handler",
      "Post     author": "graphql/resolvers/fields/post-author.handler",
      "Query    user": "graphql/resolvers/queries/user.handler",
      "Mutation createPost": "graphql/resolvers/mutations/createPost.handler",
      "Mutation createUser": "graphql/resolvers/mutations/createUser.handler",
      "Mutation createToken": "graphql/resolvers/mutations/createToken.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
