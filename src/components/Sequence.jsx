import React from 'react'
import { generateSequence } from '../services/sequence_format'


const Sequence = ({ sequence, seq_type, category }) => {

  const is_dna = (seq_type === 'dna') ? true : false

  return (
    <div className="container w-4/6 h-4/6">
      {generateSequence(sequence, is_dna, category)}
    </div>
  )



}

export default Sequence