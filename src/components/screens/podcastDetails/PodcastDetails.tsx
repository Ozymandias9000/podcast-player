import * as React from "react"
import { Image, StyleSheet } from "react-native"
import { Box, Text } from "react-native-design-utility"

import { RouteProp, useRoute } from "@react-navigation/native"
import { SearchParamList } from "../../../navigation/types"

type NavParams = RouteProp<SearchParamList, "PodcastDetails">

const PodcastDetails: React.FC = () => {
  const { data } = useRoute<NavParams>().params ?? {}

  return (
    <Box h={90} dir="row" align="center" px="sm">
      <Text size="xs" color="blueLight" numberOfLines={1}>
        {data.podcastName}
      </Text>
    </Box>
  )
}

const s = StyleSheet.create({
  img: {
    flex: 1,
    borderRadius: 10,
  },
})

export default PodcastDetails
