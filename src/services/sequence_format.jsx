import React from 'react'
import Base from '../components/Base'
import { residueColors, baseColors, categoryColors } from '../constants/colors'
import { residueCategories } from '../constants/residue-categories'

const complementMap = { "A": "T", "T": "A", "C": "G", "G": "C" }


export const generateBase = (baseChar) => {
  return <Base color={baseColors[baseChar]} code={baseChar} />
}

export const generateResidue = (AACode, filter = null) => {
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
  return <Base color={color} code={AACode} />
}

export const generateComplementaryBase = (baseChar) => {
  return <Base color={baseColors[complementMap[baseChar]]} code={complementMap[baseChar]} />
}

export const generateSequence = (strSeq, dna = true, filter = null) => {
  return (
    <div className="flex flex-wrap">
      {Array.prototype.map.call(strSeq, (c, i) => {
        return (
          <div style={{ flexBasis: '25px' }} className="pb-2  " key={i}>
            {dna ? generateBase(c) : generateResidue(c, filter)}
          </div>
        )
      })}
    </div>
  )
}
