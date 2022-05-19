import React from 'react';

const Toast = () => {
	return ( 
		<div className='toast' style={{}}>
			<div className='toast__header'>
				<h5>Toast Title</h5>
				<span>&close;</span>
			</div>

			<div className='toast__body'>
				<p>Toast Body</p>
			</div>	
		</div>


	 );
}
 
export default Toast;