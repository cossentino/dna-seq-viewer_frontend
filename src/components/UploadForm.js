import React, { useState, useRef } from 'react'
import { Redirect } from 'react-router'

const UploadForm = () => {

  const [redirect, setRedirect] = useState(false)
  const myForm = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setRedirect(true)
  }

  return (redirect ? <Redirect to="/" /> :
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <div className="flex items-center justify-center bg-blue-900">
        <form onSubmit={e => handleSubmit(e)} className="p-6 flex flex-col">
          <label className="text-white">
            Name
          </label>
          <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded my-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
          <label className="text-white">
            Short description
          </label>
          <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded my-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
          <label className="block tracking-wide text-white text-sm">
            Upload FASTA file:
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded my-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="file" ref={myForm} size="400" />
          <label className="block tracking-wide text-white text-sm font-bold">
            DNA or Protein
          </label>
          <div className="flex justify-center m-2">
            <input type="radio" value="1" defaultChecked label="DNA" className="mx-4" />
            <input type="radio" value="0" label="Protein" className="mx-4" />
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </div>

  )
}

export default UploadForm