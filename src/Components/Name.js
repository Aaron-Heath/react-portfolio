import React from 'react'

export default function Name({inline=true}) {
    if(inline === true) {
        return (
            <div class="branded-name">
                <p class="mint">Aaron Heath<span class="accent">.</span></p>
            </div>
          )
    }
    return (
        <div class="branded-name">
            <p class="mint">Aaron</p>
            <p class="mint">Heath<span class="accent">.</span></p>
        </div>
    
    )

}
