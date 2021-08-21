import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Header from '../components/Header'
import helix from '../images/icons/helix.svg'
import upload from '../images/icons/upload.svg'
import useAuthListener from '../context/use-auth-listener'
import Sidebar from '../components/Sidebar'
import SequencesTable from '../components/tables/SequencesTable'

const Home = () => {
  const user = useAuthListener()
  return user ? (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="w-5/6 flex justify-center">
          <SequencesTable />
        </div>
      </div>
    </div>
  ) : <Redirect to="/login" />
}

export default Home