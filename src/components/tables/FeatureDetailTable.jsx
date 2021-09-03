import React from 'react'



const FeatureDetailTable = ({ feature }) => (
    <div className="flex flex-col mx-auto max-w-sm bg-blue-900 text-white rounded my-4">
        <h4>Feature Detail</h4>
        <ul>
            <li className="p-2 flex justify-between">
                <span className="">Start: </span>
                <span>{feature.start}</span>
            </li>
            <li className="p-2 flex justify-between">
                <span className="">End: </span>
                <span>{feature.end}</span>
            </li>
            <li className="p-2 flex justify-between">
                <span className="">Feature Type: </span>
                <span>{feature.feature_type}</span>
            </li>
            <li className="p-2 flex justify-between">
                <span className="">Note: </span>
                <span>{feature.note}</span>
            </li>
            <li className="p-2 flex justify-between">
                <span className="">DB X-Refs: </span>
                <span>{feature.db_xref}</span>
            </li>
        </ul>
    </div >
)

export default FeatureDetailTable