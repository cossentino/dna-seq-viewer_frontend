import React from 'react'
import helix from '../images/icons/helix.svg'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <div className="flex items-center justify-center min-w-50 min-h-50" style={{ backgroundImage: "linear-gradient(to bottom right, #6666ff 0%, #cc66ff 100%), url('')" }}>
        <img id="helix" className="animate w-40 h-40" src={helix} alt="dna" />
      </div>
    </div>
  )
}

export default Loading