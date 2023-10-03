import React from 'react'
import PlayField from '../../game/field'
import ModalWin from '../modal/win'
import ModalRecords from '../modal/records'

const MainPage = () => {
  return (
    <main>
      <PlayField />
      <ModalWin />
      <ModalRecords />
    </main>
  )
}

export default MainPage
