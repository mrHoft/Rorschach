import React, { useState } from 'react'
import sounds from '../const/sounds'
import Store from '../utils/Store'

const store = new Store()

type TAudio = 'sound' | 'music'

// Can play music and sounds using playAudio(name)
// name must have 'music/sound.audio_name' format
// and have corresponding Audio objects in ResourceLoader
// Optional parameter audioStatusCallback
// uses to send back information about audioEnabled state
export const useAudio = (audioStatusCallback?: (enabled: boolean) => void) => {
  const volume = {
    music: 4,
    sound: 7,
  }
  const [audioList, setAudioList] = useState<Record<string, HTMLAudioElement>>({})
  const [audioEnabled, setEnabled] = useState<boolean>(!!store.get('audio'))
  let activeMusic: string | null = null

  const createAudio = (name: string) => {
    const audioType = name.split('.')[0] as TAudio
    const audio = sounds[name]
    if (audio) {
      audio.muted = false
      audio.volume = volume[audioType] / 10
      audio.loop = audioType === 'music'

      const list = audioList
      list[name] = audio
      setAudioList(list)
    } else {
      console.warn('Wrong audio name:', name)
    }
  }

  const changeStatus = (state: boolean) => {
    if (audioStatusCallback) audioStatusCallback(state)
    setEnabled(state)
    store.set('audio', state)
  }

  const muteAll = (mute: boolean) => {
    for (const audio in audioList) {
      audioList[audio].muted = mute
    }
  }

  const playAudio = (name: string) => {
    const audioType = name.split('.')[0]
    if (audioType === 'music') {
      activeMusic = name
    }

    if (!audioEnabled) return
    if (!audioList[name]) createAudio(name)

    if (!Object.keys(audioList).length || !audioList[name]) return
    audioList[name].play().catch((e: Error) => {
      console.warn(e.message)
      changeStatus(false)
    })
  }

  const switchAudio = (state: boolean) => {
    changeStatus(state)

    if (activeMusic) {
      if (state) playAudio(activeMusic)
      else audioList[activeMusic]?.pause()
    }
  }

  const stopAudio = () => {
    for (const audio in audioList) {
      audioList[audio].pause()
      audioList[audio].currentTime = 0
    }
    activeMusic = null
  }

  return {
    createAudio,
    playAudio,
    stopAudio,
    switchAudio,
    audioEnabled,
  }
}
