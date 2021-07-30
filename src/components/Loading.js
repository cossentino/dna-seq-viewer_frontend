import React, { useEffect, useState } from 'react'
import helix from '../images/helix.svg'
import getSequence from '../services/api/api_requests'
import { generateBase, generateComplementaryBase } from '../services/sequence_format'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <img id="helix" className="animate w-40 h-40" src={helix} alt="dna" />
    </div>
  )
}


export default Loading