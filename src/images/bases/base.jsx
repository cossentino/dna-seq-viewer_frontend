import React from 'react'


const Base = ({ color, code }) => {
	return (
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			viewBox="0 0 500 500" >
			<rect x="99" style={{ fill: color, stroke: '#000000', strokeMiterlimit: 10 }} width="294" height="428" />
			<g id="Layer_2_2_">
				<rect y="428" style={{ fill: '#6D6E71' }} width="500" height="72" />
			</g>
		</svg>
	)
}

export default Base
