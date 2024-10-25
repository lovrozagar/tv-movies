import { playerVideoSources } from "@/screens/player/constans/playerVideoSources"

function getRandomPlayerVideoSource() {
  return playerVideoSources[Math.floor(Math.random() * playerVideoSources.length)]
}

export { getRandomPlayerVideoSource }
