import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './components/templates/main/main'
import Footer from './components/templates/footer/footer'
import Header from './components/templates/header/header'

const container = document.getElementById('root') as HTMLElement

console.log('(.)(.)') // Nothing will work without it!

const initialChildren = (
  <StrictMode>
    <Header />
    <MainPage />
    <Footer />
  </StrictMode>
)

const root = createRoot(container)
root.render(initialChildren)
