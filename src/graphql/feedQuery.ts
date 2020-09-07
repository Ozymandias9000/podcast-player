import { gql } from "@apollo/client"

const feedQuery = gql`
  query FeedQuery($feedUrl: String!) {
    feed(feedUrl: $feedUrl) {
      description
      text
      duration
      image
      linkUrl
      pubDate
      title
    }
  }
`

export default feedQuery
