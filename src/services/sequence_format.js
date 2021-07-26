import adenine from '../images/bases/adenine.svg'
import cytosine from '../images/bases/cytosine.svg'
import guanine from '../images/bases/guanine.svg'
import thymine from '../images/bases/thymine.svg'


const baseMapper = { "A": adenine, "C": cytosine, "T": thymine, "G": guanine }


const generateBase = (baseChar) => {
  const div = document.createElement('div')
  const baseImage = baseMapper[baseChar]
  return baseImage
}

export default generateBase