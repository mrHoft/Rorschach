import React, { FC } from 'react'
import './button.scss'

type ButtonProps = {
  // Button contents
  label: string
  // Is this the principal call to action on the page?
  primary?: boolean
  // Button text color
  color?: string
  // What background color to use
  backgroundColor?: string
  // How large should the button be?
  size?: 'small' | 'medium' | 'large'
  // Optional click handler
  onClick?: () => {}
}

const Button: FC<ButtonProps> = ({ ...props }) => {
  const { color, backgroundColor, primary, size, onClick, label } = props
  const mode = primary ? 'button-primary' : 'button-secondary'
  return (
    <button type="button" className={['button', `button-${size}`, mode].join(' ')} style={{ color, backgroundColor }}>
      {label}
    </button>
  )
}

Button.defaultProps = {
  primary: false,
  color: 'inherit',
  backgroundColor: undefined,
  size: 'medium',
  onClick: undefined,
}

export default Button
