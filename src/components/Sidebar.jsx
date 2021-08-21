import React from 'react'
import { Link } from 'react-router-dom'
import helix from '../images/icons/helix.svg'
import upload from '../images/icons/upload.svg'

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-items-start w-1/6 bg-blue-900 h-screen py-2 px-1 rounded">
      <Link className="flex items-center align-middle justify-center" to="/upload">
        <button className=" flex flex-col justify-evenly bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold p-2 m-4 w-4/5 rounded">
          <div className="flex justify-center">
            <img className="w-4/5 h-4/5 p-1" src={upload} alt="upload arrow" />
          </div>
          <div>
            Upload Sequence
          </div>
        </button>
      </Link>
      <Link className="flex items-center align-middle justify-center" to="/sequences">
        <button className=" flex flex-col justify-evenly bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold p-2 m-4 w-4/5 rounded">
          <div>
            <img className="w-4/5 inline-flex p-1" src={helix} alt="dnahelix" />
          </div>
          <div>
            View Sequences
          </div>
        </button>
      </Link>
    </div>
  )
}