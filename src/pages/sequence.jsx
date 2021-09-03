import React, { useState } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'
import Sequence from '../components/Sequence'
import AnnotationsTable from '../components/tables/AnnotationsTable'
import AnalysisTable from '../components/tables/AnalysisTable'
import { useSequence, useAnalysis } from '../services/api/api_requests'
import { CategoryFilter, AACodeFilter, FeatureFilter } from '../components/filters/peptideColorFilters'
import FeatureDetailTable from '../components/tables/FeatureDetailTable'
import { getFeatureById } from '../services/sequence_format'


const SequencePage = () => {

  const sequenceId = useParams().sequenceId
  const [category, setCategory] = useState("")
  const [rawModeOn, setrawModeOn] = useState(false)
  const [analysis, setAnalysis] = useState(false)
  const [main, annotations, features] = useSequence(sequenceId)

  const analysisTable = useAnalysis(sequenceId)



  return !main || !annotations || !features ? null : (
    <div className="flex flex-col">
      <Header />
      {/* Title */}
      <h2 className="ic-h2">{main.name}</h2>
      {/* Rest of page */}
      <div id="main" className="flex justify-evenly">
        <AnnotationsTable annotations={annotations} className="mr-auto" />
        {analysis && analysisTable ? (
          <AnalysisTable analysisObject={analysisTable} />
        ) : (
          <Sequence sequence={main.seq} seq_type={main.seq_type} category={category} raw={rawModeOn} features={features} />
        )}
        <div className="flex flex-col mx-auto max-w-sm float-right border-blue-900 border-4 rounded-sm">
          <div className="flex flex-col justify-center my-10 mx-4">
            <div className="m-1 bg-blue-900 rounded text-white p-2 flex flex-col">

              {category && category.startsWith('feature') ? (
                <FeatureDetailTable feature={getFeatureById(features, parseInt(category.split('_')[1]))} />) : null}

              <CategoryFilter onChange={(e) => setCategory(e.target.value)} category={category} />
              <AACodeFilter onChange={(e) => setCategory(e.target.value)} category={category} />
              <FeatureFilter onChange={(e) => setCategory(`feature_${e.target.value}`)} category={category} features={features} />
              <button className="ic-button" onClick={() => setCategory(null)}>Clear Highlight</button>
            </div>
          </div>
          <button className="ic-button" onClick={() => setrawModeOn(!rawModeOn)}>Toggle Raw View</button>
          <button className="ic-button" onClick={() => setAnalysis(!analysis)}>Show Analysis</button>
        </div>
      </div>
    </div>
  )
}

export default SequencePage



