import React from 'react'
import { Link } from 'react-router-dom'



const AnnotationsTable = ({ annotations }) => (
  <div className="flex flex-col mx-auto max-w-sm float-left border-blue-900 border-4 rounded-sm">
    <ul className="">
      <li className="p-2 flex justify-between">
        <span className="font-bold mx-1">Accessions: </span>
        {annotations.accessions.map(el => {
          return (
            <a className="link" href={`https://www.ncbi.nlm.nih.gov/search/all/?term=${el}`}>
              {el}
            </a>
          )
        })}
      </li>
      <li className="p-2 flex justify-between"><span className="font-bold mx-1">GI: </span><span>{annotations.gi}</span></li>
      <li className="p-2 flex justify-between"><span className="font-bold mx-1">Organism: </span><span>{annotations.organism}</span></li>
      <li className="p-2 flex justify-between">
        <span className="font-bold mx-1">Keywords: </span>
        <div className="flex flex-col">
          {annotations.keywords.map(el => {
            return <span>{el}</span>
          })}
        </div>
      </li>
      <li className="p-2 flex justify-between">
        <span className="font-bold mx-1">Taxonomy: </span>
        <div className="flex flex-col">
          {annotations.taxonomy.map(el => {
            return <span>{el}</span>
          })}
        </div>
      </li>
    </ul>
  </div>
)

export default AnnotationsTable