import React from 'react'
import './Button.css'
import { ButtonProps } from './Button.types'


function Button({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) {
  return (
    <button
      className={`button ${variant} ${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
