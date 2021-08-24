import React from 'react'
import Base from '../components/Base'
import { residueColors, baseColors, categoryColors } from '../constants/colors'
import { residueCategories } from '../constants/residue-categories'

const complementMap = { "A": "T", "T": "A", "C": "G", "G": "C" }


export const generateBase = (baseChar, idx) => {
  return <Base color={baseColors[baseChar]} code={baseChar} idx={idx} />
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
  return <Base color={color} code={AACode} idx={idx} />
}

export const generateComplementaryBase = (baseChar) => {
  return <Base color={baseColors[complementMap[baseChar]]} code={complementMap[baseChar]} />
}

export const generateSequence = (strSeq, dna = true, filter = null) => {
  return (
    <div className="m-4 flex flex-wrap">
      {Array.prototype.map.call(strSeq, (c, i) => {
        return (
          dna ? generateBase(c, i) : generateResidue(c, i, filter)
        )
      })}
    </div>
  )
}
