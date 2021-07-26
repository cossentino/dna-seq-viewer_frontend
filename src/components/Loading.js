import React, { useEffect, useState } from 'react'
import helix from '../images/helix.svg'
import getSequence from '../services/api/api_requests'

const Loading = () => {

  const [sequence, setSequence] = useState("")

  useEffect(() => {
    getSequence().then(data => setSequence(data.seq))
  })

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <img id="helix" className="animate w-40 h-40" src={helix} alt="dna" />
      <p>{sequence}</p>
    </div>
  )
}


export default Loading