import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export default async function getSequence(id = 0) {
  const data = await fetch('http://127.0.0.1:8000/test')
    .then(resp => resp.json())
  return data
}

export function useSequences() {
  // Initialize state to hold results from fetch call
  const [sequences, setSequences] = useState([])

  // Fetch sequences from API and save them in state
  useEffect(() => {
    async function getSequences() {
      const cookie = Cookies.get('token')
      const response = await fetch('http://localhost:8000/sequences', { headers: { 'Authorization': `Token ${cookie}` } }).then(resp => resp.json())
      setSequences(response.data)
    }
    getSequences()
    // As of right now, there are no dependencies on which use effect should fire again
  }, [])
  return sequences
}


export function useSequence(id) {
  // Initialize state to hold results from fetch call
  const [sequence, setSequence] = useState(null)

  // Fetch sequences from API and save them in state
  useEffect(() => {
    async function getSequence() {
      const cookie = Cookies.get('token')
      const response = await fetch(`http://localhost:8000/sequences/${id}`, { headers: { 'Authorization': `Token ${cookie}` } }).then(resp => resp.json())
      setSequence(response.data)
    }
    getSequence()
    // As of right now, there are no dependencies on which use effect should fire again
  }, [])
  return sequence
}