import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import LibraryScreen from "../components/screens/library/LibraryScreen";
import ListenNowScreen from "../components/screens/listenNow/ListenNowScreen";
import SearchScreen from "../components/screens/search/SearchScreen";
import {
  MainTabParamList,
  LibraryParamList,
  ListenNowParamList,
  SearchParamList,
} from "../types";

const MainTab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="ListenNow"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <MainTab.Screen
        name="ListenNow"
        component={ListenNowNavigator}
        options={{
          tabBarLabel: "Listen Now",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Library"
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const LibraryStack = createStackNavigator<LibraryParamList>();

function LibraryNavigator() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{ title: "Library" }}
      />
    </LibraryStack.Navigator>
  );
}

const ListenNowStack = createStackNavigator<ListenNowParamList>();

function ListenNowNavigator() {
  return (
    <ListenNowStack.Navigator>
      <ListenNowStack.Screen
        name="ListenNowScreen"
        component={ListenNowScreen}
        options={{ title: "Listen Now" }}
      />
    </ListenNowStack.Navigator>
  );
}
const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ title: "Search" }}
      />
    </SearchStack.Navigator>
  );
}