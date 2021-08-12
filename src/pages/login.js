import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/forms/LoginForm'


const Login = () => {

  return (
    <div>
      <Header />
      <div className="container flex justify-evenly items-center align-middle mx-auto min-h-full">
        <div className="flex items-center align-middle text-8xl font-bold">
          Login
        </div>
        <div className="flex h-1/2 bg-blue-900">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login