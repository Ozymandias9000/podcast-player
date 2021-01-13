import React, { useContext } from "react"
import { Image, StyleSheet, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { Box, Text } from "react-native-design-utility"
import { FeedItem, Podcast } from "../../../types/graphql"
import { theme } from "../../../constants/theme"
import { PlayerContext } from "../../../contexts/PlayerContext"

interface Props {
  data: Podcast
  feed: FeedItem[]
}

const DetailHeader: React.FC<Props> = ({ data, feed }) => {
  const ctx = useContext(PlayerContext)

  return (
    <>
      <Box dir="row" px="sm" mt="sm" mb="md">
        {data.thumbnail && (
          <Box mr={10}>
            <Image source={{ uri: data.thumbnail }} style={s.img} />
          </Box>
        )}
        <Box f={1} px="sm">
          <Text size="lg" bold>
            {data.podcastName}
          </Text>
          <Text size="xs" color="grey">
            {data.artist}
          </Text>
          <Text size="xs" color="blueLight">
            Subscribed
          </Text>
        </Box>
      </Box>
      <Box px="sm" mb="md" dir="row" align="center">
        <TouchableOpacity
          onPress={() => {
            const el = feed?.[0]

            if (!el) return

            ctx.play({
              artist: data.artist,
              title: el.title,
              artwork: el.image ?? data.thumbnail,
              id: el.linkUrl,
              url: el.linkUrl,
            })
          }}
        >
          <MaterialIcons
            name="play-arrow"
            size={30}
            color={theme.color.blueLight}
          />

          <Box f={1}>
            <Text size="xs" pl="xs" bold>
              Play
            </Text>
            <Text size="sm" pl="xs">
              {feed?.[0]?.title}
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>

      <Box px="sm" mb="md">
        <Text size="md" color="greyDarkest" bold>
          Episodes
        </Text>
      </Box>
    </>
  )
}

const s = StyleSheet.create({
  img: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
})

export default DetailHeader
