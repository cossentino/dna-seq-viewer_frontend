import React, { useState } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'
import Sequence from '../components/Sequence'
import { useSequence } from '../services/api/api_requests'



const SequencePage = () => {

  const sequenceId = useParams().sequenceId
  const sequence = useSequence(sequenceId)

  return (

    <div>
      <Header />
      <div>
        <h2>Sequence {sequenceId}</h2>
        <div>
          <Sequence sequence={sequence} />
        </div>
      </div>
    </div>
  )
}

export default SequencePage



