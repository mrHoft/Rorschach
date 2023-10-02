import React from 'react'
import Button from './ui/Button/Button'
import Footer from './templates/footer/footer'

const MainPage = () => {
  return (
    <main>
      <h2 style={margin}>Rorschach game</h2>
      <Button color="#e0e0e0" backgroundColor="#808080" label="Button" />
    </main>
  )
}

const margin = {
  marginBottom: '2rem',
}

export default MainPage
