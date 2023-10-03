import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Button from 'ui/Button/Button'
import PlayField from '../../game/field'

const MainPage = () => {
  return (
    <main>
      <PlayField />
      {/* <Button color="#e0e0e0" backgroundColor="#808080" label="Button" /> */}
    </main>
  )
}

export default MainPage
