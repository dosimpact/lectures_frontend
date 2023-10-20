import { useState } from 'react'

const Box = ({ color = 'pink', size, onClick, onHover }) => {
  // throw new Error('properties needed')
  if (onClick) onClick()

  const sizeToStyle = (size) => {
    switch (size) {
      case 'sm':
        return { width: '50px', height: '50px' }
      case 'md':
        return { width: '100px', height: '100px' }
      case 'lg':
        return { width: '150px', height: '150px' }
      default:
        return { width: '100px', height: '100px' }
    }
  }
  return <div style={{ background: color, ...sizeToStyle(size) }}></div>
}
export default Box
