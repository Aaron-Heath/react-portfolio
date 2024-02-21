import React from 'react'

export default function Name({inline=true}) {
    if(inline === true) {
        return (
            <>
            <div className="branded-name">
                <p className="mint">Aaron Heath<span className="accent">.</span></p>
            </div>
            <div className="dash">

            </div>
            </>
            
          )
    }
    return (
        <>
        <div className="branded-name">
            <p className="mint">Aaron</p>
            <p className="mint">Heath<span className="accent">.</span></p>
        </div>
        <div className="dash">
            
        </div>
        </>
    )

}
