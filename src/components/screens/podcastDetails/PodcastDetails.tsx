import React from "react"
import { useQuery } from "@apollo/client"
import { FlatList, StyleSheet } from "react-native"
import { Box } from "react-native-design-utility"
import { RouteProp, useRoute } from "@react-navigation/native"

import feedQuery from "../../../graphql/feedQuery"
import { Query, QueryFeedArgs, FeedItem } from "../../../types/graphql"
import { SearchParamList } from "../../../navigation/types"

import DetailHeader from "./DetailHeader"
import Episode from "./Episode"

import { theme } from "../../../constants/theme"

type NavParams = RouteProp<SearchParamList, "PodcastDetails">

const PodcastDetails: React.FC = () => {
  const { data } = useRoute<NavParams>().params ?? {}
  const { data: { feed = [] } = {}, error } = useQuery<Query, QueryFeedArgs>(
    feedQuery,
    {
      variables: { feedUrl: data.feedUrl },
    }
  )

  return (
    <Box f={1} bg="white">
      <FlatList<FeedItem>
        data={feed}
        ListHeaderComponent={<DetailHeader data={data} feed={feed} />}
        ItemSeparatorComponent={() => (
          <Box w="100%" px="sm" my="sm">
            <Box
              style={{ height: StyleSheet.hairlineWidth }}
              bg={theme.color.greyLighter}
            ></Box>
          </Box>
        )}
        renderItem={({ item }) => <Episode item={item} />}
        keyExtractor={({ linkUrl }) => linkUrl}
      />
    </Box>
  )
}

export default PodcastDetails
