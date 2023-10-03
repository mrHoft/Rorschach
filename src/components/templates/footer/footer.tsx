import React from 'react'
import styled from 'styled-components'
import Link from '../../ui/link/link'
import RSSUrl from '../../../assets/rss.svg'

const Footer: React.FC = () => {
  return (
    <WrapFooter>
      <WrapAuthor>
        <p>© 2023</p>
        <Link href="https://github.com/mrHoft">mrHoft</Link>
      </WrapAuthor>
      <RSSLogo />
    </WrapFooter>
  )
}

const WrapFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0.25rem 4rem;
  background-color: var(--color-bg-panel);
`
const WrapAuthor = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
`
const RSSLogo = styled.a`
  width: 5.4rem;
  height: 2rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${RSSUrl});
  cursor: pointer;
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 0.6;
  }
`
export default Footer
