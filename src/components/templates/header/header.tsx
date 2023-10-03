import React from 'react'
import styled from 'styled-components'
import Link from '../../ui/link/link'
import ImgUrl from '../../../assets/tear.png'
import Interplay from '../../../utils/interplay'

const interplay = new Interplay()

const Header: React.FC = () => {
  return (
    <WrapHeader>
      <WrapTitle>
        <Logo src={ImgUrl} />
        <h2>Rorschach the game</h2>
      </WrapTitle>
      <MainNav>
        <ul>
          <li>
            <Link animation="underline" onClick={() => interplay.run('game.new')}>
              New game
            </Link>
          </li>
          <li>
            <Link animation="underline" onClick={() => interplay.run('modal.records')}>
              Records
            </Link>
          </li>
          <li>
            <Link animation="underline" onClick={() => console.log('About')}>
              About
            </Link>
          </li>
        </ul>
      </MainNav>
    </WrapHeader>
  )
}

const WrapHeader = styled.header`
  width: 100%;
  min-height: 2rem;
  background-color: var(--color-bg-panel);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 1rem;
`
const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`
const Logo = styled.img`
  width: 3rem;
  height: 3rem;
`
const MainNav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
    list-style: none;
  }
`

export default Header
