import React, { useState } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'
import Sequence from '../components/Sequence'
import AnnotationsTable from '../components/tables/AnnotationsTable'
import AnalysisTable from '../components/tables/AnalysisTable'
import { useSequence, useAnalysis } from '../services/api/api_requests'
import { CategoryFilter, AACodeFilter } from '../components/filters/peptideColorFilters'


const SequencePage = () => {

  const sequenceId = useParams().sequenceId
  const [category, setCategory] = useState(null)
  const [rawSequence, setRawSequence] = useState(false)
  const [analysis, setAnalysis] = useState(false)
  const [main, annotations] = useSequence(sequenceId)

  const analysisTable = useAnalysis(sequenceId, analysis)



  return !main || !annotations ? null : (
    <div className="flex flex-col">
      <Header />
      {/* Title */}
      <h2 className="text-5xl font-bold text-blue-900 w-1/2 mb-4">{main.name}</h2>
      {/* Rest of page */}
      <div id="main" className="flex justify-evenly">
        <AnnotationsTable annotations={annotations} className="mr-auto" />
        {analysis && analysisTable ? (
          <AnalysisTable analysisObject={analysisTable} />
        ) : (
          <Sequence sequence={main.seq} seq_type={main.seq_type} category={category} raw={rawSequence} />
        )}
        <div>

          <div className="flex flex-col mx-auto max-w-sm float-right border-blue-900 border-4 rounded-sm">
            <div className="flex flex-col justify-center my-10 mx-4">
              {main.seq_type === 'dna' ? null : (
                <div className="m-1 bg-blue-900 rounded text-white p-2 flex flex-col">
                  <CategoryFilter onChange={(e) => setCategory(e.target.value)} category={category} />
                  <AACodeFilter onChange={(e) => setCategory(e.target.value)} category={category} />
                  <button className="mx-auto my-4 w-1/2 bg-blue-400 hover:bg-blue-900 text-white text-sm rounded h-12" onClick={() => setCategory(null)}>Clear Filter</button>
                </div>)}
            </div>
            <button className="mx-auto my-4 w-1/2 bg-blue-400 hover:bg-blue-900 text-white text-sm rounded h-12" onClick={() => setRawSequence(!rawSequence)}>Toggle Raw View</button>
            <button className="mx-auto my-4 w-1/2 bg-blue-400 hover:bg-blue-900 text-white text-sm rounded h-12" onClick={() => setAnalysis(!analysis)}>Show Analysis</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SequencePage



