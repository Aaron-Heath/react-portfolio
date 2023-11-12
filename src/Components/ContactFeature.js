import React from 'react'
import ContactCard from './ContactCard'

export default function ContactFeature() {
  return (
    <div id="contact-section" class="row">
        <div class="row text-centered">
            <h2>CONTACT ME</h2>
        </div>
        <div class="row">
            <section id="contact-info" class="col-md-6">
              <ContactCard type="email" text="aaron.heath5447@gmail.com"/>

            </section>
            <section id="contact-form" class="col-md-6">

            </section>
        </div>
        
    </div>
  )
}
