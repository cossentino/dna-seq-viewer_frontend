import React from 'react'



const AnnotationsTable = ({ annotations }) => (
  <div className="flex flex-col mx-auto max-w-sm float-left bg-blue-900 text-white rounded">
    <ul className="">
      <li className="p-2 flex justify-between">
        <span className=" flex flex-col items-end font-bold mx-1">Accessions: </span>
        {annotations.accessions.map((el, i) => {
          return (
            <a className="link" key={i} href={`https://www.ncbi.nlm.nih.gov/search/all/?term=${el}`}>
              {el}
            </a>
          )
        })}
      </li>
      <li className="p-2 flex justify-between"><span className="font-bold mx-1">GI: </span><span>{annotations.gi}</span></li>
      <li className="p-2 flex justify-between">
        <span className="font-bold mx-1">Organism: </span>
        <span className="text-right">{annotations.organism}</span>
      </li>
      <li className="p-2 flex justify-between">
        <span className="font-bold mx-1">Keywords: </span>
        <div className="flex flex-col items-center">
          {annotations.keywords.map((el, i) => {
            return <span key={i}>{el}</span>
          })}
        </div>
      </li>
      <li className="p-2 flex justify-between">
        <span className="font-bold mx-1">Taxonomy: </span>
        <div className="flex flex-col items-end">
          {annotations.taxonomy.map((el, i) => {
            return <span key={i}>{el}</span>
          })}
        </div>
      </li>
    </ul>
  </div >
)

export default AnnotationsTable