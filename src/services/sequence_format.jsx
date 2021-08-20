import React from 'react'
import Base from '../images/base'
import { residueColors, baseColors } from '../constants/colors'

const complementMap = { "A": "T", "T": "A", "C": "G", "G": "C" }


export const generateBase = (baseChar) => {
  return <Base color={baseColors[baseChar]} code={baseChar} />
}

export const generateResidue = (AACode) => {
  return <Base color={residueColors[AACode]} code={AACode} />
}

export const generateComplementaryBase = (baseChar) => {
  return <Base color={baseColors[complementMap[baseChar]]} code={complementMap[baseChar]} />
}

export const generateSequence = (strSeq, dna = true) => {
  return (
    <div className="flex flex-wrap">
      {Array.prototype.map.call(strSeq, (c, i) => {
        return (
          <div style={{ flexBasis: '25px' }} className="pb-2  " key={i}>
            {dna ? generateBase(c) : generateResidue(c)}
          </div>
        )
      })}
    </div>
  )
}
