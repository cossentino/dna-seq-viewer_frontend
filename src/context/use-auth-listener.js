import React, { useState, useEffect, useContext } from 'react'
import Cookies from 'js-cookie'
import UserContext from '../context/user'

export default function useAuthListener() {
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    async function getUserEmail() {
      const userEmail = Cookies.get('email')
      setUser(userEmail)
    }
    getUserEmail()
  }, [])
  return user
}