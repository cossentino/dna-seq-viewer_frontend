import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Header from '../components/Header'
import helix from '../images/icons/helix.svg'
import upload from '../images/icons/upload.svg'
import useAuthListener from '../context/use-auth-listener'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const user = useAuthListener()
  return user ? (
    <div>
      <Header />
      <Sidebar />
    </div>
  ) : <Redirect to="/login" />
}

export default Home