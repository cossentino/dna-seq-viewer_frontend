import React from 'react'



export default function AnalysisTable({ analysisObject }) {

    let [keys, values] = [null, null]

    if (analysisObject) {
        keys = Object.entries(analysisObject).map(el => el[0])
        values = Object.entries(analysisObject).map(el => el[1])
    }

    return !analysisObject ? null : (
        <div className="w-11/12 flex flex-col justify-center border-blue-900 border-4 rounded-sm p-4">
            <h4>AA Breakdown</h4>
            <table className="divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Code
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            %
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {keys.map((k, i) => (
                        <tr>
                            <td>
                                {k}
                            </td>
                            <td>
                                {values[i]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
