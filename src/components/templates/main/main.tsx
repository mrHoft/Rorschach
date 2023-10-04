import React from 'react'
import PlayField from '../../../engine/field'
import ModalWin from '../modal/win'
import ModalRecords from '../modal/records'
import ModalAbout from '../modal/about'
import ModalNewGame from '../modal/new'

const MainPage = () => {
  return (
    <main>
      <PlayField />
      <ModalWin />
      <ModalRecords />
      <ModalAbout />
      <ModalNewGame />
    </main>
  )
}

export default MainPage
