import React from 'react'
import { Tooltip } from '@material-ui/core'


const Base = ({ color, code, idx }) => {
	return (
		<Tooltip title={`${code}${idx}`} placement={"top"}>
			<div style={{ background: color, border: '.1rem solid', width: '30px', height: '30px' }}></div>
		</Tooltip>
	)
}

export default Base




