import React, { useContext } from "react"
import { MaterialIcons } from "@expo/vector-icons"
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"

import Colors from "../constants/Colors"
import useColorScheme from "../hooks/useColorScheme"
import LibraryScreen from "../components/screens/library/LibraryScreen"
import ListenNowScreen from "../components/screens/listenNow/ListenNowScreen"
import SearchScreen from "../components/screens/search/SearchScreen"
import {
  MainTabParamList,
  LibraryParamList,
  ListenNowParamList,
  SearchParamList,
} from "./types"
import PodcastDetails from "../components/screens/podcastDetails/PodcastDetails"

import { theme } from "../constants/theme"
import { ICON_SIZE } from "../constants/constants"
import Player from "../components/screens/player/Player"
import { PlayerContext } from "../contexts/PlayerContext"

const MainTab = createBottomTabNavigator<MainTabParamList>()

export default function MainTabNavigator() {
  const colorScheme = useColorScheme()
  const { isEmpty } = useContext(PlayerContext)

  return (
    <MainTab.Navigator
      initialRouteName="ListenNow"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
      tabBar={(props) => (
        <>
          {!isEmpty && <Player />}
          <BottomTabBar {...props} />
        </>
      )}
    >
      <MainTab.Screen
        name="ListenNow"
        component={ListenNowNavigator}
        options={{
          tabBarLabel: "Listen Now",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="play-arrow" color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Library"
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="library-music" color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
    </MainTab.Navigator>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return (
    <MaterialIcons size={ICON_SIZE} style={{ marginBottom: -3 }} {...props} />
  )
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const LibraryStack = createStackNavigator<LibraryParamList>()

function LibraryNavigator() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{ title: "Library" }}
      />
    </LibraryStack.Navigator>
  )
}

const ListenNowStack = createStackNavigator<ListenNowParamList>()

function ListenNowNavigator() {
  return (
    <ListenNowStack.Navigator>
      <ListenNowStack.Screen
        name="ListenNowScreen"
        component={ListenNowScreen}
        options={{ title: "Listen Now" }}
      />
    </ListenNowStack.Navigator>
  )
}
const SearchStack = createStackNavigator<SearchParamList>()

function SearchNavigator() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerTintColor: theme.color.blueLight,
        headerTitleStyle: {
          color: theme.color.black,
        },
      }}
    >
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ title: "Search" }}
      />
      <SearchStack.Screen
        name="PodcastDetails"
        component={PodcastDetails}
        options={{ title: "Details" }}
      />
    </SearchStack.Navigator>
  )
}
