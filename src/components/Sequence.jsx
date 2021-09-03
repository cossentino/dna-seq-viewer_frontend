import React from 'react'
import { generateSequence } from '../services/sequence_format'


const Sequence = ({ sequence, category, raw, features }) => {


  return (
    <div className="w-11/12 flex justify-center">
      {raw ? (
        <p className="break-words max-w-prose">{sequence}</p>
      ) : (
        generateSequence(sequence, category, features)
      )}
    </div>
  )



}

export default Sequence