import React, { ReactNode } from 'react'
import classNames from 'classnames'

interface TextProps {
  children: ReactNode
  className?: string
  size?: 'small' | 'medium' | 'large'
  color?: string
  bold?: boolean
  italic?: boolean
}

const Text: React.FC<TextProps> = ({
  children,
  className,
  size = 'medium',
  color,
  bold = false,
  italic = false,
}) => {
  const classes = classNames('text', className, {
    text__small: size === 'small',
    text__medium: size === 'medium',
    text__large: size === 'large',
    text__bold: bold,
    text__italic: italic,
  })

  return (
    <span className={classes} style={{ color }}>
      {children}
    </span>
  )
}

export default Text
