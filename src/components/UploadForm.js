import React, { useState, useRef } from 'react'
import { postConfObj, ADD_SEQUENCE_URL, csrftoken } from '../services/forms'

const UploadForm = () => {

  const myFileInput = useRef()
  const [formData, setFormData] = useState({ description: "", name: "", raw_sequence: "" })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileUpload = e => {
    e.preventDefault()
    debugger
    myFileInput.current.files[0].text().then(raw_sequence => setFormData({ ...formData, raw_sequence: raw_sequence }))
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
      <label className="text-white">
        DNA or Protein?
      </label>
      <div>
        <input type="radio" name="sequence_type" id="radio_dna" value="0" onChange={handleChange} />
        <label className="text-white m-1" for="radio_dna">DNA</label>
      </div>
      <div>
        <input type="radio" name="sequence_type" id="radio_protein" value="1" onChange={handleChange} />
        <label className="text-white m-1" for="radio_protein">Protein</label>
      </div>
      <label className="block tracking-wide text-white text-sm mt-2">
        Upload FASTA file:
      </label>
      <input type="file" ref={myFileInput} onChange={handleFileUpload} size="400" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded my-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded">Submit</button>
    </form>
  )
}

export default UploadForm