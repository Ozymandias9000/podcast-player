import React, { useState } from "react"

interface Track {
  title: string
  artwork: string
  id: string
  url: string
  artist: string
}

interface IPlayerContext {
  isPlaying: boolean
  isPaused: boolean
  isStopped: boolean
  isEmpty: boolean
  currentTrack: Track | null
  play: (arg: Track) => void
  pause: () => void
}

export const PlayerContext = React.createContext<IPlayerContext>({
  isPlaying: false,
  isPaused: false,
  isStopped: false,
  isEmpty: false,
  currentTrack: null,
  play: () => null,
  pause: () => null,
})

const PlayerContextProvider: React.FC = ({ children }) => {
  const [player, setPlayer] = useState<null | Object>(null)

  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)

  const value: IPlayerContext = {
    isPlaying: false,
    isPaused: false,
    isStopped: false,
    isEmpty: false,
    currentTrack: null,
    play: setCurrentTrack,
    pause: () => null,
  }

  //   useEffect(() => {}, [input])

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  )
}

export default PlayerContextProvider
