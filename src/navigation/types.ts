import { Podcast } from "../types/graphql"

export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
}

export type MainTabParamList = {
  ListenNow: undefined
  Library: undefined
  Search: undefined
}

export type ListenNowParamList = {
  ListenNowScreen: undefined
}

export type LibraryParamList = {
  LibraryScreen: undefined
}

export type SearchParamList = {
  SearchScreen: undefined
  PodcastDetails: {
    data: Podcast
  }
}
