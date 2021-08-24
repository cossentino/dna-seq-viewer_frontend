import React from 'react'
import { generateSequence } from '../services/sequence_format'


const Sequence = ({ sequence, seq_type, category, raw }) => {

  const is_dna = (seq_type === 'dna') ? true : false

  return raw ? (
    <div className="w-11/12 flex">
      {sequence}
    </div>
  ) : (
    <div className="w-11/12 flex">
      {generateSequence(sequence, is_dna, category)}
    </div>
  )



}

export default Sequence