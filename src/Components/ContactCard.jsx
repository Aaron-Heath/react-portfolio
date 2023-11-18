import React from 'react'
import EmailIcon from '../icons/icons8-email-96.png'
import LinkedIcon from '../icons/icons8-linkedin-100.png'

export default function ContactCard({type, text, href}) {
    let icon;
  if(type === "email") {
    return(
        <a href={href}>
            {/* TODO: On Click, copy email to clipboard */}
        <div class="contact-card">
            <img src={EmailIcon} alt="Email Icon"/> {text}
        </div>
        </a>
    )
    
  } else if (type === "linkedin") {
    return (
        <a href={href}>
        <div class="contact-card">
            <img src={LinkedIcon} alt="Email Icon"/> {text}
        </div>
        </a>
    )
  }

}
