import React from 'react'

export default function FeatureCard({header,title,text, link, id}) {

  function handleClick(event) {
    if(!event.target.matches("#learn-more")) {
      return;
    }

    window.location="/about"
  }


  return (
    <div className="feature-card" id={id}>
      <h2>{header}</h2>
      <h3>{title}</h3>
      <p>{text}</p>
      <span id="learn-more" onClick={handleClick}>Learn more</span>
    </div>
  )
}
