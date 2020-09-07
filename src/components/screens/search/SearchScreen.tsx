import * as React from "react"
import { StyleSheet, TextInput, FlatList } from "react-native"
import { useLazyQuery } from "@apollo/client"
import { Box, Text } from "react-native-design-utility"

import { theme } from "../../../constants/theme"
import searchQuery from "../../../graphql/searchQuery"
import { Podcast, QuerySearchArgs, Query } from "../../../types/graphql"

const SearchScreen = () => {
  const [term, setTerm] = React.useState("")
  const [loadSearch, { data, loading, error }] = useLazyQuery<
    Query,
    QuerySearchArgs
  >(searchQuery)
  console.log(data)
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

      {term && data?.hasOwnProperty("search") && !data.search.length ? (
        <Box align="center">
          <Text color={theme.color.grey}>No results found!</Text>
        </Box>
      ) : null}

      <FlatList<Podcast>
        keyboardShouldPersistTaps="never"
        data={data?.search ?? []}
        style={s.list}
        renderItem={({ item }) => (
          <Box h={90} dir="row" align="center" px="sm">
            <Box h={70} w={70} bg={theme.color.blueLight} mr={10} radius={10} />
            <Box>
              <Text bold>{item.podcastName}</Text>
              <Text size="xs" color="grey">
                {item.artist}
              </Text>
              <Text size="xs" color="blueLight">
                {item.episodesCount} episodes
              </Text>
            </Box>
          </Box>
        )}
        keyExtractor={({ podcastName }) => String(podcastName)}
      />
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
    minHeight: "100%",
  },
})

export default SearchScreen
