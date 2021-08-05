import React from 'react'
import Header from '../components/Header'
import { useSequences } from '../services/api/api_requests'


const SequencesPage = () => {
  const sequences = useSequences()
  if (sequences === null) {
    return "waiting"
  } else {
    return (
      <div>
        <Header />
        {sequences.map(s => <span key={s.id}>{s.raw_sequence}{s.name}{s.description}</span>)}
      </div>
    )
  }

}

export default SequencesPage