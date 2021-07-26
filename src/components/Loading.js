import React, { useEffect, useState } from 'react'
import helix from '../images/helix.svg'
import getSequence from '../services/api/api_requests'
import generateBase from '../services/sequence_format'

const Loading = () => {

  const [sequence, setSequence] = useState("")
  const hello = "hello"

  useEffect(() => {
    getSequence().then(data => setSequence(data.seq))
  })

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <img id="helix" className="animate w-40 h-40" src={helix} alt="dna" />
      <p>{sequence}</p>
      <span>{hello.toLocaleUpperCase()}</span>
      {Array.prototype.map.call(sequence, (c) => {
        return <img className="w-5 h-5" src={generateBase(c)} alt="dnaBase" />
      })}
    </div>
  )
}


export default Loading