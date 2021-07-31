import React, { useState, useRef } from 'react'
import { postConfObj, ADD_SEQUENCE_URL, csrftoken } from '../services/forms'

const UploadForm = () => {

  const myFileInput = useRef()
  const [formData, setFormData] = useState({ description: "", name: "", sequenceType: "1", rawText: "" })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileUpload = e => {
    e.preventDefault()
    myFileInput.current.files[0].text().then(rawText => setFormData({ ...formData, rawText: rawText }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const request = new Request(ADD_SEQUENCE_URL, { headers: { 'X-CSRFToken': csrftoken } })
    fetch(request, postConfObj(formData))
      .catch(error => console.log(error))
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className="p-6 flex flex-col">
      <label className="text-white">
        Name
      </label>
      <input name="name" type="text" onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded my-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
      <label className="text-white">
        Short description
      </label>
      <input type="text" name="description" onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded my-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
      <label className="block tracking-wide text-white text-sm">
        Upload FASTA file:
      </label>
      <input type="file" ref={myFileInput} onChange={handleFileUpload} size="400" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded my-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
      <label className="block tracking-wide text-white text-sm font-bold">
        DNA or Protein
      </label>
      <div className="flex justify-center m-2">
        <input name="sequenceType" onChange={handleChange} type="radio" value="1" defaultChecked label="DNA" className="mx-4" />
        <input name="sequenceType" onChange={handleChange} type="radio" value="0" label="Protein" className="mx-4" />
      </div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded">Submit</button>
    </form>
  )
}

export default UploadForm