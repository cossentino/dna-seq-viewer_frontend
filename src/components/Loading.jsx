import React from 'react'
import helix from '../images/icons/helix.svg'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <div className="flex items-center justify-center min-w-50 min-h-50 bg-blue-900">
        <img id="helix" className="animate w-40 h-40" src={helix} alt="dna" />
      </div>
    </div>
  )
}

export default Loading