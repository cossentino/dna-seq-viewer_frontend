import React from 'react'
import Header from '../components/Header'
import { useSequences } from '../services/api/api_requests'
import { Link } from 'react-router-dom'
import { generateSequence } from '../services/sequence_format'

export default function SequencesPage() {
  const sequences = useSequences()
  return (
    <div>
      <Header />
      <div className="container flex justify-center align-middle">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        FASTA Header
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sequences.map(s => (
                      <tr key={s.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link to={`/sequences/${s.id}`}>
                            <div className="text-sm text-gray-900">{s.name}</div>
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{s.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{s.fasta_header}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{generateSequence(s.raw_sequence)}</div>
                        </td>
                      </tr>))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

