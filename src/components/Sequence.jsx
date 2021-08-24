import React from 'react'
import { generateSequence } from '../services/sequence_format'


const Sequence = ({ sequence, seq_type, category }) => {

  const is_dna = (seq_type === 'dna') ? true : false

  return (
    <div className="w-11/12 flex">
      {generateSequence(sequence, is_dna, category)}
    </div>
  )



}

export default Sequence