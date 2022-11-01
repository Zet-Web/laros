import React from 'react'
import classNames from 'classnames'
import './button.css'

export const Button = ({ onClick, type, children, size = 's' }) => {
  const btnClass = classNames({
    btn: true,
    'btn--noselect': type === 'noselect',
    'btn--select': type === 'select',
    'btn--small': size === 's',
    'btn--medium': size === 'm',
  })

  return (
    <button className={btnClass} onClick={onClick}>
      {/* { children } */}
    </button>
  )
}
