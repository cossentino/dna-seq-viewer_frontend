import React from 'react'
import Base from '../components/Base'
import { residueColors, baseColors, categoryColors } from '../constants/colors'
import { residueCategories } from '../constants/residue-categories'

const complementMap = { "A": "T", "T": "A", "C": "G", "G": "C" }


export const generateBase = (baseChar, idx) => {
  return <Base color={baseColors[baseChar]} code={baseChar} key={idx} idx={idx} />
}

export const generateResidue = (AACode, idx, filter = null) => {
  let color
  if (!filter) {
    color = residueColors[AACode]
  } else {
    if ((residueCategories[filter] && residueCategories[filter].includes(AACode)) || filter === AACode) {
      color = categoryColors.selected
    } else {
      color = categoryColors.unselected
    }
  }
  return <Base color={color} code={AACode} idx={idx} key={idx} />
}

export const generateComplementaryBase = (baseChar) => {
  return <Base color={baseColors[complementMap[baseChar]]} code={complementMap[baseChar]} />
}

// Seq type 'dna' or 'peptide'
export const generateSequence = (strSeq, seq_type, filter = null) => {
  return (
    <div className="m-4 flex flex-wrap">
      {Array.prototype.map.call(strSeq, (c, i) => {
        return (
          seq_type === 'dna' ? generateBase(c, i) : generateResidue(c, i, filter)
        )
      })}
    </div>
  )
}
