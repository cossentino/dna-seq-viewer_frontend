import React, { useState } from 'react'
import { postConfObj, LOGIN_URL, csrftoken } from '../../services/forms'



const LoginForm = () => {

  const [formData, setFormData] = useState({ email: "", password: "" })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const request = new Request(LOGIN_URL, { headers: { 'X-CSRFToken': csrftoken } })
    fetch(request, postConfObj(formData))
      .catch(error => console.log(error))
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className="p-6 flex flex-col justify-evenly">

      <div>
        <label className="text-white text-lg">
          Email
        </label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded my-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
      </div>

      <div>
        <label className="text-white text-lg">
          Password
        </label>
        <input type="text" name="password" value={formData.password} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded my-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
      </div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded">Submit</button>
    </form>
  )
}

export default LoginForm