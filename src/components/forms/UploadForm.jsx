import React, { useState, useRef } from 'react'
import { ADD_SEQUENCE_URL } from '../../services/forms'
import Cookies from 'js-cookie'

const UploadForm = () => {

  const myFileInput = useRef()
  const [formData, setFormData] = useState({ description: "", name: "", sequence_type: "", input_file_format: "" })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileUpload = e => {
    e.preventDefault()
    myFileInput.current.files[0].text().then(raw_fasta => setFormData({ ...formData, raw_sequence: raw_fasta }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const csrftoken = Cookies.get('csrftoken')
    const headers = new Headers()
    headers.append('X-CSRFToken', csrftoken)
    headers.append('Authorization', `Token ${Cookies.get('token')}`)
    fetch(ADD_SEQUENCE_URL, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: headers,
      credentials: 'include'
    })
      .catch(error => console.log(error))
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className="p-6 flex flex-col">

      <label className="text-white">
        Name
      </label>
      <input name="name" type="text" value={formData.name} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded my-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />

      <label className="text-white">
        Short description
      </label>
      <input type="text" name="description" value={formData.description} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded my-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />

      <div className="flex justify-center items-center text-white" onChange={handleChange}>
        <input type="radio" name="sequence_type" className="mx-1 bg-gray-200" value="dna">
        </input>
        <label className="mx-1">DNA</label>
        <input type="radio" name="sequence_type" className="mx-1 bg-gray-200" value="rna">
        </input>
        <label className="mx-1">RNA</label>
        <input type="radio" name="sequence_type" className="mx-1 bg-gray-200" value="peptide">
        </input>
        <label className="mx-1">Peptide</label>
      </div>

      <div className="flex justify-center items-center text-white" onChange={handleChange}>
        <input type="radio" name="input_file_format" className="mx-1 bg-gray-200" value="fasta">
        </input>
        <label className="mx-1">FASTA</label>
        <input type="radio" name="input_file_format" className="mx-1 bg-gray-200" value="genbank">
        </input>
        <label className="mx-1">GenBank</label>
      </div>

      <label className="block tracking-wide text-white text-sm mt-2">
        Upload file:
      </label>
      <input type="file" ref={myFileInput} onChange={handleFileUpload} size="400" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded my-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded">Submit</button>
    </form>
  )
}

export default UploadForm