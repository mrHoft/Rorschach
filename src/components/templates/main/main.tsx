import React from 'react'
import PlayField from '../../game/field'
import ModalWin from '../modal/win'
import ModalRecords from '../modal/records'
import ModalAbout from '../modal/about'

const MainPage = () => {
  return (
    <main>
      <PlayField />
      <ModalWin />
      <ModalRecords />
      <ModalAbout />
    </main>
  )
}

export default MainPage
