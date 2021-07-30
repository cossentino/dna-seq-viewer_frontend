import React from 'react'

const Home = () => {











  return (
    <div>I am the home page</div>
  )
}

export default Home



{/* 
  
  const [sequence, setSequence] = useState("")

  useEffect(() => {
    getSequence().then(data => setSequence(data.seq))
  })

  
<p>{sequence}</p>
<div className="flex flex-col">
  <div id="template-strand" className="flex flex-grow items-center">
    {Array.prototype.map.call(sequence, (c) => {
      return <img className="w-5 h-5 inline-flex" style={{ transform: "rotate(180deg)" }} src={generateBase(c)} alt="dnaBase" />
    })}
  </div>
  <div id="complement-strand" className="flex flex-grow items-center">
    {Array.prototype.map.call(sequence, (c) => {
      return <img className="w-5 h-5 inline-flex" src={generateComplementaryBase(c)} alt="dnaBase" />
    })}
  </div> */}