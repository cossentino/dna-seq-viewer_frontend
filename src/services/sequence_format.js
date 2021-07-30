import React from 'react'
import adenine from '../images/bases/adenine.svg'
import cytosine from '../images/bases/cytosine.svg'
import guanine from '../images/bases/guanine.svg'
import thymine from '../images/bases/thymine.svg'
import backbone from '../images/bases/backbone.svg'


const baseMapper = { "A": adenine, "C": cytosine, "T": thymine, "G": guanine }

const complementMapper = { "A": "T", "T": "A", "C": "G", "G": "C" }


export const generateBase = (baseChar) => {
  const baseImage = baseMapper[baseChar]
  return baseImage
}

export const generateComplementaryBase = (baseChar) => {
  const baseImage = baseMapper[complementMapper[baseChar]]
  return baseImage
}

export const generateSequence = (strSeq) => {
  return (
    <div className="inline-flex">
      {Array.prototype.map.call(strSeq, (c, i) => {
        return (
          <div className="float-right" key={i}>
            <img className="w-5 h-5 inline-flex" style={{ transform: "rotate(180deg)" }} src={generateBase(c)} alt="dnaBase" />
            <img className="w-5 h-5 inline-flex" style={{ transform: "rotate(180deg)" }} src={backbone} alt="backbone-segment" />
          </div>
        )
      })}
    </div>
  )
}