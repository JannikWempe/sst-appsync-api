export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: string;
  AWSDateTime: string;
  AWSEmail: string;
  AWSIPAddress: string;
  AWSJSON: string;
  AWSPhone: string;
  AWSTime: string;
  AWSTimestamp: number;
  AWSURL: string;
  BigInt: any;
  Double: any;
};

export type CreatePostInput = {
  authorId: Scalars['ID'];
  title: Scalars['String'];
};

export type CreateTokenInput = {
  userId: Scalars['ID'];
};

export type CreateUserInput = {
  name: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  createToken?: Maybe<Scalars['String']>;
  createUser?: Maybe<User>;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreateTokenArgs = {
  input: CreateTokenInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  post?: Maybe<Post>;
  user?: Maybe<User>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  username: Scalars['String'];
};
