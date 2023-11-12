import React from 'react'
import EmailIcon from '../icons/icons8-email-96.png'

export default function ContactCard({type, text}) {
    let icon;
  if(type === "email") {
    return(
        <div class="contact-card">
            <img src={EmailIcon} alt="Email Icon"/> {text}
        </div>
    )
    
  }
    return (
    <div>
      
    </div>
  )
}
