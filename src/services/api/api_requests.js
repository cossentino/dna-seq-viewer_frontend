import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export const LOGIN_URL = 'http://localhost:8000/api/users/login/'
export const ADD_SEQUENCE_URL = 'http://localhost:8000/sequences'

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
  const [main, setMain] = useState(null)
  const [annotations, setAnnotations] = useState(null)
  const [features, setFeatures] = useState(null)

  // Fetch sequences from API and save them in state
  useEffect(() => {
    async function getSequence() {
      const cookie = Cookies.get('token')
      const response = await fetch(`http://localhost:8000/sequences/${id}`, { headers: { 'Authorization': `Token ${cookie}` } }).then(resp => resp.json())
      setMain(response.data.main)
      setAnnotations(response.data.annotations)
      setFeatures(response.data.features)
    }
    getSequence()
    // As of right now, there are no dependencies on which use effect should fire again
  }, [])
  return [main, annotations, features]
}

export function useAnalysis(id, analysis) {
  const [analysis, setAnalysis] = useState(null)

  // Fetch sequences from API and save them in state
  useEffect(() => {
    async function getAnalysis() {
      const cookie = Cookies.get('token')
      const response = await fetch(`http://localhost:8000/sequences/${id}?analysis=True`, { headers: { 'Authorization': `Token ${cookie}` } }).then(resp => resp.json())
      setAnalysis(response.data)
    }
    getAnalysis()
    // As of right now, there are no dependencies on which use effect should fire again
  }, [analysis])
  return analysis
}