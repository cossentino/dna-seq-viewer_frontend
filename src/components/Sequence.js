import React, { useState } from 'react'
import Loading from './Loading'



const Sequence = ({ sequence }) => {


  return !sequence ? null : (
    <div>
      This is a sequence with id of {sequence.id}.
      Name: {sequence.name}
      Created at: {sequence.created_at}
    </div>
  )



}

export default Sequence