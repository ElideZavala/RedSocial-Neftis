import React from 'react';

const Toast = () => {
	return ( 
		<div className='toast' style={{}}>
			<div className='toast__header'>
				<h5 className='toast__header--title'>Toast Title</h5>
				<small className='toast__header--icon'>&times;</small>
			</div>

			<div className='toast__body'>
				<p>Toast Body</p>
			</div>	
		</div>


	 );
}
 
export default Toast;