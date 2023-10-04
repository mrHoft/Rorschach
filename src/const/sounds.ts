import urlSound1 from '../assets/slide3.ogg'
import urlSound2 from '../assets/slide8.ogg'
import urlSound3 from '../assets/whoosh6.ogg'
import urlMusic from '../assets/ambient.mp3'

const sounds: Record<string, HTMLAudioElement> = {
  'sound.slide2': new Audio(urlSound1),
  'sound.slide3': new Audio(urlSound1),
  'sound.slide8': new Audio(urlSound2),
  'sound.match': new Audio(urlSound3),
  'music.ambient': new Audio(urlMusic),
}

export default sounds
