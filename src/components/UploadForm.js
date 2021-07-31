import React, { useState, useRef } from 'react'
import { Redirect } from 'react-router'

const UploadForm = () => {

  const myFileInput = useRef()
  const [formData, setFormData] = useState({ description: "", name: "", sequenceType: "1", rawText: "" })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const rawText = await myFileInput.current.files[0].text()
    setFormData({ ...formData, rawText: rawText })
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className="p-6 flex flex-col">
      <label className="text-white">
        Name
      </label>
      <input name="name" type="text" onChange={e => handleChange(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded my-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
      <label className="text-white">
        Short description
      </label>
      <input type="text" name="description" onChange={e => handleChange(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded my-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
      <label className="block tracking-wide text-white text-sm">
        Upload FASTA file:
      </label>
      <input type="file" ref={myFileInput} size="400" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded my-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
      <label className="block tracking-wide text-white text-sm font-bold">
        DNA or Protein
      </label>
      <div className="flex justify-center m-2">
        <input name="sequenceType" onChange={(e) => handleChange(e)} type="radio" value="1" defaultChecked label="DNA" className="mx-4" />
        <input name="sequenceType" onChange={(e) => handleChange(e)} type="radio" value="0" label="Protein" className="mx-4" />
      </div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded">Submit</button>
    </form>
  )
}

export default UploadForm