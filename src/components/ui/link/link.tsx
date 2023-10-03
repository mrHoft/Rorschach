import styled, { css } from 'styled-components'

type LinkProps = {
  color?: string
  icon?: string
  size?: string
  animation?: 'fill' | 'underline'
}

// TODO: icon

const fashion = {
  base: css`
    transition: opacity 0.3s linear;
    &:hover {
      opacity: 0.6;
    }
  `,

  underline: css<LinkProps>`
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${({ color }) => color || 'currentColor'};
      bottom: -2px;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  `,

  fill: css<LinkProps>`
    font-weight: 800;
    background-image: linear-gradient(to right, gray, gray 50%, ${({ color }) => color || 'currentColor'} 50%);
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    position: relative;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
    &::before {
      content: '';
      background: gray;
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      background-position: 0;
    }
    &:hover::before {
      width: 100%;
    }
  `,
}

/**
 * @param animation - optional ('fill' | 'underline')
 * @param {string} [size] - optional font size
 * @param {string} [color] - optional text and effects color
 */
const Link = styled.a<LinkProps>`
  text-decoration: none;
  cursor: pointer;
  color: ${({ color }) => color || 'inherit'};
  font-weight: 500;
  font-size: ${({ size }) => size || 'inherit'};
  &:active {
    opacity: 0.9;
  }
  &:focus-visible {
    opacity: 0.9;
  }
  ${({ animation }) => (animation ? fashion[animation] : fashion.base)}
`

export default Link
