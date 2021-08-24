import React from 'react'



const AnalysisTable = ({ analysisObject }) => (
    <div className="flex flex-col w-1/4 border-blue-900 border-4 rounded-sm">
        <ul>
            {Object.entries(analysisObject).map(el => {
                return <li><span>{el[0]}</span><span>{el[1]}</span></li>
            }
            )}
        </ul>
    </div>
)

export default AnalysisTable