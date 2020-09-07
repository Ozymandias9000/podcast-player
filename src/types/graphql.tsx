import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FeedItem = {
  __typename?: 'FeedItem';
  pubDate: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
  subtitle: Scalars['String'];
  description: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  summary: Scalars['String'];
  linkUrl: Scalars['String'];
  duration: Scalars['String'];
};

export type Podcast = {
  __typename?: 'Podcast';
  artist: Scalars['String'];
  podcastName: Scalars['String'];
  feedUrl: Scalars['String'];
  thumbnail: Scalars['String'];
  episodesCount: Scalars['Int'];
  genres: Array<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  search: Array<Podcast>;
  feed: Array<FeedItem>;
};


export type QuerySearchArgs = {
  term: Scalars['String'];
};


export type QueryFeedArgs = {
  feedUrl: Scalars['String'];
};
