import React, { useEffect, useContext } from "react"
import { Audio } from "expo-av"
import { Box, Text } from "react-native-design-utility"

import { theme } from "../../../constants/theme"
import { PlayerContext } from "../../../contexts/PlayerContext"
import { TouchableOpacity } from "react-native-gesture-handler"
import { MaterialIcons } from "@expo/vector-icons"
import { ICON_SIZE } from "../../../constants/constants"

const Player = () => {
  const ctx = useContext(PlayerContext)

  if (ctx.isEmpty || !ctx.currentTrack) {
    return null
  }

  useEffect(() => {
    const cb = async () => {
      try {
        const { sound: soundObject, status } = await Audio.Sound.createAsync(
          {
            uri:
              "https://traffic.libsyn.com/secure/syntax/Syntax281.mp3?dest-id=532671",
          },
          {
            shouldPlay: true,
          }
        )

        console.log(soundObject, status)
        // Your sound is playing!

        return async () => {
          // Don't forget to unload the sound from memory
          // when you are done using the Sound object
          await soundObject.unloadAsync()
        }
      } catch (e) {
        console.error(e) // eslint-disable-line
      }
    }

    // cb()
  }, [])

  return (
    <Box
      h={75}
      px="sm"
      bg="white"
      style={{ borderTopWidth: 1, borderTopColor: theme.color.greyLightest }}
    >
      <Box f={1} dir="row" align="center" justify="between">
        <Box h={50} w={50} bg={theme.color.blueLight} radius={10} mr={10}></Box>
        <Box>
          <Text>Title</Text>
        </Box>
        <Box>
          {ctx.isPaused ? (
            <TouchableOpacity onPress={() => ctx.play(ctx.currentTrack)}>
              <MaterialIcons name="play-arrow" size={30}></MaterialIcons>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={ctx.pause}>
              <MaterialIcons name="pause" size={30}></MaterialIcons>
            </TouchableOpacity>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default Player
