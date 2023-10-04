import React, { useState } from 'react'
import styled from 'styled-components'
import urlMusic0 from '../../../assets/music-off.svg'
import urlMusic1 from '../../../assets/music-on.svg'
import { useAudio } from '../../../hooks/useAudio'

const SettingsMusic = () => {
  const [enabled, setEnabled] = useState<boolean>(false)
  const { playAudio, stopAudio } = useAudio()

  function clickHandler() {
    setEnabled(!enabled)
    if (!enabled) playAudio('music.ambient')
    else stopAudio()
  }

  return <MusicIcon enabled={enabled} onClick={clickHandler} />
}

const MusicIcon = styled.div<{ enabled: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ enabled }) => (enabled ? urlMusic1 : urlMusic0)});
  cursor: pointer;
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 0.6;
  }
`
export default SettingsMusic
