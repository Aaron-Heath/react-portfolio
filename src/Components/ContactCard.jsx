import React, { useState } from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

import EmailIcon from '../icons/icons8-email-96.png'
import LinkedIcon from '../icons/icons8-linkedin-100.png'
import CopyIcon from '../icons/icons8-copy-96.png'

export default function ContactCard({type, text, href}) {
    const [clicked, setClick] = useState(false);  

    const myEmail = "aaron.heath5447@gmail.com";
    let icon;

// Component Functions
    // Swich state on click
    function handleEmailClick(event) {
      console.log(`Clicked = ${clicked}`)

      if(clicked === true) {
        return;
      }

      setClick(true);
    }

    // https://www.freecodecamp.org/news/copy-text-to-clipboard-javascript/
    async function copyToClipboard(event) {
      try {
        await navigator.clipboard.writeText(myEmail);
        console.log("Copied email to clipboard!");

        // render tooltip
        renderTooltip();
      } catch (e) {
        console.log(e);
      }
    }

    function renderTooltip() {
      // Select relevant elements
      const $emailCard = document.getElementById("email-card");
      
      // Create ToolTip Element
      const $tooltip = document.createElement("div");
      
      // Set Attributes
      $tooltip.setAttribute("class", "tooltip");
      // Append
      $emailCard.appendChild($tooltip);
    }
    
  if(type === "email") {

    // If clicked is true, render email options, else render standard card
    if(clicked) {

      // Render email options card
      return(
          <div className="contact-card options" id="email-card" onClick={handleEmailClick}>
              <div>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aaron.heath5447@gmail.com" target="_blank" rel="noopener noreferrer"><img src={"https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"} alt="Gmail Icon"/>
                  {"Gmail"}
                </a>
              </div>
              <div>
                <a href="mailto:aaron.heath5447@gmail.com" target="_blank" rel="noopener noreferrer"><img src={"https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg"} alt="Outlook Icon"/>
                  {"Outlook"}
                </a>
              </div>


                <div id="clipboard-copy" onClick={copyToClipboard}>
                  <img src={CopyIcon} alt="Copy Icon"/>
                  <span>{"Copy Email"}</span>
                </div>
          </div>
    )
    }

    return(
        <div className="contact-card" id="email-card" onClick={handleEmailClick}>
            <img src={EmailIcon} alt="Email Icon"/> {text}
        </div>
    )

    
  } else if (type === "linkedin") {
    return (
        <a href={href}>
        <div className="contact-card">
            <img src={LinkedIcon} alt="LinkedIn Icon"/> {text}
        </div>
        </a>
    )
  }

}
