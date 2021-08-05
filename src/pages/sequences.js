import React, { useEffect, useState } from 'react'
import Header from '../components/Header'


const SequencesPage = () => {

  const [sequences, setSequences] = useState([])

  useEffect(() => {
    async function getSequences() {
      return await fetch('sequencesurl').then(resp => resp.json())
    }
    const sequences = getSequences()
    setSequences(sequences)
  })


  return (
    <div>
      <Header />

    </div>
  )

}

export default SequencesPage