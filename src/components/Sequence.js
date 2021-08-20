import React, { useState } from 'react'
import { generateSequence } from '../services/sequence_format'
import Loading from './Loading'



const Sequence = ({ sequence }) => {


  return (
    <div className="container w-4/6 h-4/6">
      {generateSequence(sequence, true)}
    </div>
  )



}

export default Sequence