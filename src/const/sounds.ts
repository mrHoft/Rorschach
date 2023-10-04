import urlSound1 from '../assets/slide3.ogg'
import urlSound2 from '../assets/slide8.ogg'
import urlSound3 from '../assets/match.ogg'

const sounds: Record<string, HTMLAudioElement> = {
  'sound.slide2': new Audio(urlSound1),
  'sound.slide3': new Audio(urlSound1),
  'sound.slide8': new Audio(urlSound2),
  'sound.match': new Audio(urlSound3),
}

export default sounds
