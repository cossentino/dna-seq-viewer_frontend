import React from 'react'
import Base from '../images/bases/base'
import { residueColors, baseColors } from '../constants/colors'

const complementMapper = { "A": "T", "T": "A", "C": "G", "G": "C" }


export const generateBase = (baseChar) => {
  return <Base color={baseColors[baseChar]} code={baseChar} />
}

export const generateResidue = (AACode) => {
  return <Base color={residueColors[AACode]} code={AACode} />
}

export const generateComplementaryBase = (baseChar) => {
  return <Base color={baseColors[complementMapper[baseChar]]} code={complementMapper[baseChar]} />
}

export const generateSequence = (strSeq, dna = true) => {
  return (
    <div className="flex flex-wrap max-h-full">
      {Array.prototype.map.call(strSeq, (c, i) => {
        return (
          <div className="float-right" key={i}>
            {dna ? generateBase(c) : generateResidue(c)}
          </div>
        )
      })}
    </div>
  )
}
