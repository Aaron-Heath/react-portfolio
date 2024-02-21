import React from 'react'

export default function Link({ href, text }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">{text}</a>
  )
}
