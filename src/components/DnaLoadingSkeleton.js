import React from 'react'
import helix from '../images/helix.svg'

const DnaLoadingSkeleton = () => {
  return (
    <div id="loading-skeleton">
      <img src={helix} alt="dna" />
    </div>
  )
}


export default DnaLoadingSkeleton