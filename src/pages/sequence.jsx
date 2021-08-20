import React, { useState } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'
import Sequence from '../components/Sequence'
import AnnotationsTable from '../components/tables/AnnotationsTable'
import { useSequence } from '../services/api/api_requests'


const SequencePage = () => {

  const sequenceId = useParams().sequenceId
  const [main, annotations] = useSequence(sequenceId)

  return !main || !annotations ? null : (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <div className="w-1/2">
          <h2 className="text-5xl font-bold text-blue-900">{main.name}</h2>
        </div>
        <div className="flex flex-col mx-auto float-right border-blue-900 border-4 rounded-sm">
          <ul className="">
            <li className="p-2 flex justify-between"><span className="font-bold mx-1">Created at: </span><span>{main.created_at}</span></li>
            <li className="p-2 flex justify-between"><span className="font-bold mx-1">Description: </span><span>{main.description}</span></li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <div>
          <AnnotationsTable annotations={annotations} />
        </div>
        <div className="flex justify-center my-10">
          <Sequence sequence={main.seq.slice(0, 101)} seq_type={main.seq.seq_type} />
        </div>
      </div>
    </div>
  )
}

export default SequencePage



