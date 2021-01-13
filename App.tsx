import { StatusBar } from "expo-status-bar"
import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { ApolloProvider } from "@apollo/client"

import useCachedResources from "./src/hooks/useCachedResources"
import useColorScheme from "./src/hooks/useColorScheme"
import Navigation from "./src/navigation"
import PlayerContextProvider from "./src/contexts/PlayerContext"
import { client } from "./src/graphql/client"

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <ApolloProvider client={client}>
        <PlayerContextProvider>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </PlayerContextProvider>
      </ApolloProvider>
    )
  }
}
