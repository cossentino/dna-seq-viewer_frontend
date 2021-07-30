import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { generateSequence } from '../services/sequence_format'

const Home = () => {

  const seq = generateSequence('AACCGTG')

  return (
    <div>
      <Header />
      <p>Welcome. What would you like to do?</p>
      <Link to="/upload">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Upload Sequence
        </button>
      </Link>
      <Link to="/sequences">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Existing Sequences
        </button>
      </Link>
      {seq}


    </div>
  )
}

export default Home



/*

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
  </div> */