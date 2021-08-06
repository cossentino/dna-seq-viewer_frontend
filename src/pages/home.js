import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { generateSequence } from '../services/sequence_format'
import helix from '../images/helix.svg'
import peptide from '../images/peptide.svg'
import upload from '../images/upload.svg'

const Home = () => {

  return (
    <div>
      <Header />
      <p className="m2">Welcome. What would you like to do?</p>
      <div className="flex justify-evenly min-h-screen min-w-full m-2">
        <Link to="/upload">
          <button className=" flex flex-col justify-evenly bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-96 w-96 rounded">
            <div className="flex justify-center">
              <img src={upload} />
            </div>
            <div>
              Upload Sequence
            </div>
          </button>
        </Link>
        <Link to="/sequences">
          <button className=" flex flex-col justify-evenly bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-96 w-96 rounded">
            <div>
              <img src={helix} />
            </div>
            <div>
              View Sequences
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home