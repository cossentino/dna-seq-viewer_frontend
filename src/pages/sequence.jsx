import React, { useState } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'
import Sequence from '../components/Sequence'
import { useSequence } from '../services/api/api_requests'



const SequencePage = () => {

  const sequenceId = useParams().sequenceId
  const sequence = useSequence(sequenceId)

  return !sequence ? null : (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <div className="w-1/2">
          <h2 className="text-5xl font-bold text-blue-900">{sequence.name}</h2>
        </div>
        <div className="flex flex-col mx-auto float-right border-blue-900 border-4 rounded-sm">
          <ul className="">
            <li className="p-2 flex justify-between"><span className="font-bold mx-1">Created at: </span><span>{sequence.created_at}</span></li>
            <li className="p-2 flex justify-between"><span className="font-bold mx-1">Description: </span><span>{sequence.description}</span></li>
            <li className="p-2 flex justify-between"><span className="font-bold mx-1">Fasta Header: </span><span>{sequence.fasta_header}</span></li>
          </ul>
        </div>
      </div>
      <Sequence sequence={sequence} />
    </div>
  )
}

export default SequencePage



