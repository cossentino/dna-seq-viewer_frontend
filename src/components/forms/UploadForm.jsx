import React, { useState, useRef } from 'react'
import { ADD_SEQUENCE_URL } from '../../services/api/api_requests'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'

const UploadForm = () => {

  const myFileInput = useRef()
  const [formData, setFormData] = useState({ description: "", name: "", sequence_type: "peptide", input_file_format: "" })

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
    fetch(ADD_SEQUENCE_URL, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { 'X-CSRFToken': Cookies.get('csrftoken'), 'Authorization': `Token ${Cookies.get('token')}` },
      credentials: 'include'
    }).then(() => {
      window.location.href = "/"
    })
      .catch(error => console.log(error))
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className="p-6 flex flex-col">

      <label className="text-white">
        Name
      </label>
      <input name="name" type="text" value={formData.name} onChange={handleChange} className="ic-textInput" />

      <label className="text-white">
        Short description
      </label>
      <input type="text" name="description" value={formData.description} onChange={handleChange} className="ic-textInput" />

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
      <input type="file" ref={myFileInput} onChange={handleFileUpload} size="400" className="ic-textInput" />

      <button type="submit" className="ic-button">Submit</button>
    </form>
  )
}

export default UploadForm