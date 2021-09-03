import React from 'react'
import { Link } from 'react-router-dom'
import { useSequences } from '../../services/api/api_requests'

export default function SequencesTable() {
  const sequences = useSequences()
  return (
    <div className="flex justify-center align-middle">

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle items-center sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="ic-th">
                      Name
                    </th>
                    <th scope="col" className="ic-th">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sequences.map(s => (
                    <tr key={s.id}>
                      <td className="ic-td">
                        <Link className="link" to={`/sequences/${s.id}`}>
                          <div className="text-sm text-gray-900">{s.name}</div>
                        </Link>
                      </td>
                      <td className="ic-td">
                        <div className="text-sm text-gray-900">{s.description}</div>
                      </td>
                    </tr>))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
