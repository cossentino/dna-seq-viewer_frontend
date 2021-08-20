import React from 'react'
import Header from '../components/Header'
import UploadForm from '../components/forms/UploadForm'

const Upload = () => {

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <h1 className="font-bold text-3xl to-blue-900">Upload your sequence here</h1>
        <div className="flex items-center justify-center bg-blue-900">
          <UploadForm />
        </div>
      </div>
    </div>
  )
}

export default Upload