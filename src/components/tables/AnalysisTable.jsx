import React from 'react'



const AnalysisTable = ({ analysisObject }) => (
    <div className="flex flex-col mx-auto border-blue-900 border-4 rounded-sm">
        <ul>
            {Object.entries(analysisObject).map(el => {
                return (
                    <div>
                        <li>{el[0]}</li>
                        <li>{el[1]}</li>
                    </div>
                )
            }
            )}
        </ul>
    </div>
)

export default AnalysisTable