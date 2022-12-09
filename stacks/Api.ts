import { StackContext, AppSyncApi } from "@serverless-stack/resources";

export function Api({ stack }: StackContext) {
  const api = new AppSyncApi(stack, "api", {
    schema: "services/graphql/schema.graphql",
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
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
