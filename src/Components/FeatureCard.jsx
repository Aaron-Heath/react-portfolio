import React from 'react'

export default function FeatureCard({header,title,text, link, id}) {
  return (
    <div className="feature-card" id={id}>
      <h2>{header}</h2>
      <h3>{title}</h3>
      <p>{text}</p>
      <span>Learn more</span>
    </div>
  )
}
