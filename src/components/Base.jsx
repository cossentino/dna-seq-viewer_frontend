import React from 'react'
import { Tooltip } from '@material-ui/core'


const Base = ({ color, code }) => {
	return (
		<Tooltip title={code} placement={"top"}>
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				viewBox="0 0 5 10" >
				<rect x="0" style={{
					fill: color, stroke:
						'#000000', strokeWidth: '.25px'
				}} width="5" height="15" />
			</svg>
		</Tooltip>
	)
}

export default Base
