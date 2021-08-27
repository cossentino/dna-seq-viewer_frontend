import React from 'react'
import { generateSequence } from '../services/sequence_format'


const Sequence = ({ sequence, seq_type, category, raw }) => {


  return raw ? (
    <div className="w-11/12 flex justify-center">
      <p className="break-words max-w-prose">{sequence}</p>
    </div>
  ) : (
    <div className="w-11/12 flex">
      {generateSequence(sequence, seq_type, category)}
    </div>
  )



}

export default Sequence