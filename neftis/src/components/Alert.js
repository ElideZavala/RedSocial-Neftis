import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading';

const Alert = () => {
	const { auth, alert } = useSelector(state => state); 
	console.log({ auth, alert })
	return(
		<div>
			{alert.loading && <Loading/>}
		</div>
	)
}

export default Alert;