import React from 'react'
import PlayField from '../../game/field'
import ModalWin from '../modal/win'

const MainPage = () => {
  return (
    <main>
      <PlayField />
      <ModalWin />
    </main>
  )
}

export default MainPage
