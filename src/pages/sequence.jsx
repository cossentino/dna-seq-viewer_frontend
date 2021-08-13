import React, { useState } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'
import Sequence from '../components/Sequence'



const SequencePage = () => {

  const sequenceId = useParams().sequenceId

  return (

    <div>
      <Header />
      <div>
        <h2>Sequence {sequenceId}</h2>
        <div>
          <Sequence id={sequenceId} />
        </div>
      </div>
    </div>





  )



}

export default SequencePage



