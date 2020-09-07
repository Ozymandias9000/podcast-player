import { gql } from "@apollo/client"

const searchQuery = gql`
  query SearchQuery($term: String!) {
    search(term: $term) {
      podcastName
      artist
      episodesCount
      feedUrl
      thumbnail
      genres
    }
  }
`

export default searchQuery
