import adenine from '../images/bases/adenine_b.svg'
import cytosine from '../images/bases/cytosine_b.svg'
import guanine from '../images/bases/guanine_b.svg'
import thymine from '../images/bases/thymine_b.svg'


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
