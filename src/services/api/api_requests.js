import { useEffect, useState } from 'react'

export default async function getSequence(id = 0) {
  const data = await fetch('http://127.0.0.1:8000/test')
    .then(resp => resp.json())
  return data
}

export function useSequences() {

  const [sequences, setSequences] = useState([])

  useEffect(() => {
    async function getSequences() {
      const response = await fetch('http://localhost:8000/sequences').then(resp => resp.json())
      setSequences(response.data)
    }
    getSequences()
  }, [])
  return sequences
}

export async function saveSequence() {
}