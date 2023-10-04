import React, { useState } from 'react'
import styled from 'styled-components'
import urlAudio0 from '../../../assets/audio0.svg'
import urlAudio3 from '../../../assets/audio3.svg'
import Store from '../../../utils/Store'
import Interplay from '../../../utils/interplay'

const interplay = new Interplay()

const store = new Store()

const SettingsAudio = () => {
  const [enabled, setEnabled] = useState<boolean>(!!store.get('audio'))

  function clickHandler() {
    interplay.run('audio.switch', !enabled)
    setEnabled(!enabled)
  }

  return <AudioIcon enabled={enabled} onClick={clickHandler} />
}

const AudioIcon = styled.div<{ enabled: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ enabled }) => (enabled ? urlAudio3 : urlAudio0)});
  cursor: pointer;
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 0.6;
  }
`
export default SettingsAudio
