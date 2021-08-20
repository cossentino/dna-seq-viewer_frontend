import React, { useState } from 'react'
import { generateSequence } from '../services/sequence_format'
import Loading from './Loading'



const Sequence = ({ sequence, seq_type }) => {

  const is_dna = (seq_type === 'dna') ? true : false

  return (
    <div className="container w-4/6 h-4/6">
      {generateSequence(sequence, is_dna)}
    </div>
  )



}

export default Sequence