import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './components/MainPage'
import Footer from './components/templates/footer/footer'

const container = document.getElementById('root') as HTMLElement

const initialChildren = (
  <StrictMode>
    <MainPage />
    <Footer />
  </StrictMode>
)

const root = createRoot(container)
root.render(initialChildren)
