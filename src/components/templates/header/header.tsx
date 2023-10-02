import React from 'react'
import styled from 'styled-components'
import Link from '../../ui/link/link'

const Header: React.FC = () => {
  return (
    <WrapHeader>
      <MainNav>
        <ul>
          <li>
            <Link animation="underline" onClick={() => console.log('Главная')}>
              Главная
            </Link>
          </li>
          <li>
            <Link animation="underline" onClick={() => console.log('O компании')}>
              O компании
            </Link>
          </li>
          <li>
            <Link animation="underline" onClick={() => console.log('Контакты')}>
              Контакты
            </Link>
          </li>
        </ul>
      </MainNav>
    </WrapHeader>
  )
}

const WrapHeader = styled.header`
  width: 100vw;
  min-height: 4rem;
  background-color: var(--color-bg-panel);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: 0 4px 0.5rem rgba(0, 0, 0, 0.5);
  z-index: 3;
`
const MainNav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
  }
`

export default Header
