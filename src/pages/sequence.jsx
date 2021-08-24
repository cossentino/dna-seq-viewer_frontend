import React, { useState } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'
import Sequence from '../components/Sequence'
import AnnotationsTable from '../components/tables/AnnotationsTable'
import { useSequence } from '../services/api/api_requests'
import { CategoryFilter, AACodeFilter } from '../components/filters/peptideColorFilters'


const SequencePage = () => {

  const sequenceId = useParams().sequenceId
  const [category, setCategory] = useState(null)
  const [main, annotations] = useSequence(sequenceId)


  return !main || !annotations ? null : (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <h2 className="text-5xl font-bold text-blue-900 w-1/2">{main.name}</h2>
        <div className="flex flex-col mx-auto float-right border-blue-900 border-4 rounded-sm">
          <ul className="p-2 flex flex-col justify-between mx-1">
            <li><strong>Created at: </strong><span>{main.created_at}</span></li>
            <li><strong>Description: </strong><span>{main.description}</span></li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <AnnotationsTable annotations={annotations} />
        <div className="flex flex-col justify-center my-10 mx-4">
          {main.seq_type === 'dna' ? null : (
            <div className="m-4 w-1/4 flex flex-col">
              <CategoryFilter onChange={(e) => setCategory(e.target.value)} category={category} />
              <AACodeFilter onChange={(e) => setCategory(e.target.value)} category={category} />
              <button className="mx-auto my-4 w-1/2 bg-blue-400 hover:bg-blue-900 text-white text-sm rounded h-12" onClick={() => setCategory(null)}>Clear Filter</button>
            </div>
          )}
          <Sequence sequence={main.seq.slice(0, 101)} seq_type={main.seq_type} category={category} />
        </div>
      </div>
    </div >
  )
}

export default SequencePage



