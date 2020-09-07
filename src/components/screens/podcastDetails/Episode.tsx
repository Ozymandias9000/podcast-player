import * as React from "react"
import { Box, Text } from "react-native-design-utility"
import { FeedItem } from "../../../types/graphql"

interface Props {
  item: FeedItem
}

const Episode: React.FC<Props> = ({ item }) => {
  const getDate = (date: string) => {
    const d = new Date(date)
    const dateTimeFormat = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    })
    const [
      { value: month },
      ,
      { value: day },
      ,
      { value: year },
    ] = dateTimeFormat.formatToParts(d)

    return `${month} ${day}, ${year}`
  }

  return (
    <Box px="sm">
      <Text size="xs" color="grey">
        {getDate(item.pubDate)} - {item.duration}
      </Text>
      <Text bold>{item.title}</Text>
      <Text size="sm" color="grey" numberOfLines={2}>
        {item.description}
      </Text>
    </Box>
  )
}

export default Episode
