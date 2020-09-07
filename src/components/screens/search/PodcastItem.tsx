import * as React from "react"
import { Image, StyleSheet, TouchableOpacity } from "react-native"
import { Box, Text } from "react-native-design-utility"
import { Podcast } from "../../../types/graphql"
import { useNavigation } from "@react-navigation/native"

interface Props {
  item: Podcast
}

const PodcastItem: React.FC<Props> = ({ item }) => {
  const nav = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => nav.navigate("PodcastDetails", { data: item })}
    >
      <Box h={90} dir="row" align="center" px="sm">
        <Box h={70} w={70} mr={10} radius={10}>
          {item.thumbnail && (
            <Image source={{ uri: item.thumbnail }} style={s.img} />
          )}
        </Box>
        <Box>
          <Text numberOfLines={1} bold>
            {item.podcastName}
          </Text>
          <Text size="xs" color="grey" numberOfLines={1}>
            {item.artist}
          </Text>
          <Text size="xs" color="blueLight" numberOfLines={1}>
            {item.episodesCount} episodes
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  img: {
    flex: 1,
    borderRadius: 10,
  },
})

export default PodcastItem
