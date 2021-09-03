import React from 'react'
import Base from '../components/Base'
import { residueColors, categoryColors } from '../constants/colors'
import { residueCategories } from '../constants/residue-categories'

// Input: features object where each feature has unique ID
// Output: feature obj with correct Id, or null if not found
export const getFeatureById = (features, id) => {
  for (let feat in features) {
    if (features[feat].id === id) {
      return features[feat]
    }
  }
  return null
}


export const generateResidue = (AACode, idx, filter = null, features = null) => {
  let color, border
  if (!filter) {
    color = residueColors[AACode]
  } else {
    if ((residueCategories[filter] && residueCategories[filter].includes(AACode)) || filter === AACode) {
      color = residueColors[AACode]
    } else if (filter.startsWith('feature')) {
      const id = parseInt(filter.split('_')[1])
      const feature = getFeatureById(features, id)
      if (idx >= feature.start && idx <= feature.end) {
        color = residueColors[AACode]
      }
    }
    if (!color) {
      color = `#ebebeb`
      border = '.1rem solid #ebebeb'
    } else {
      border = '.1rem solid'
    }
  }
  return <Base color={color} code={AACode} idx={idx} key={idx} border={border} />
}


export const generateSequence = (strSeq, filter = null, features = null) => {
  return (
    <div className="m-4 flex flex-wrap">
      {Array.prototype.map.call(strSeq, (c, i) => {
        return generateResidue(c, i, filter, features)
      })}
    </div>
  )
}
