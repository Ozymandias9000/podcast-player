import * as React from "react"
import { StyleSheet, TextInput, FlatList } from "react-native"
import { useLazyQuery } from "@apollo/client"
import { Box, Text } from "react-native-design-utility"

import searchQuery from "../../../graphql/searchQuery"
import { Podcast, QuerySearchArgs, Query } from "../../../types/graphql"

import { theme } from "../../../constants/theme"
import NoResults from "../../utils/NoResults"
import PodcastItem from "./PodcastItem"
import Loading from "../../utils/Loading"

const SearchScreen = () => {
  const [term, setTerm] = React.useState("")
  const [
    loadSearch,
    { data: { search: searchResult = [] } = {}, loading, error },
  ] = useLazyQuery<Query, QuerySearchArgs>(searchQuery)

  const onSearch = async () => {
    try {
      await loadSearch({ variables: { term } })
    } catch (e) {
      console.error(e) // eslint-disable-line
    }
  }

  return (
    <Box f={1} bg="white">
      <Box h={50} w="100%" px="sm" my="sm">
        <TextInput
          style={s.input}
          placeholder="Search Podcasts"
          selectionColor={theme.color.blueLight}
          onChangeText={setTerm}
          autoCorrect={false}
          onSubmitEditing={onSearch}
          value={term}
        />
      </Box>

      {error ? (
        <Box f={1} center>
          <Text color={theme.color.red}>{error.message}</Text>
        </Box>
      ) : (
        <FlatList<Podcast>
          keyboardShouldPersistTaps="never"
          data={searchResult}
          contentContainerStyle={s.list}
          ListHeaderComponent={() => <Loading loading={loading} />}
          ListEmptyComponent={() => <NoResults loading={loading} />}
          renderItem={({ item }) => <PodcastItem item={item} />}
          keyExtractor={({ podcastName, artist }) => podcastName + artist}
        />
      )}
    </Box>
  )
}

const s = StyleSheet.create({
  input: {
    height: 30,
    flex: 1,
    backgroundColor: theme.color.greyLightest,
    borderRadius: 10,
    paddingHorizontal: theme.space.sm,
    fontSize: theme.text.size.md,
  },
  list: {
    paddingBottom: 90,
  },
})

export default SearchScreen
