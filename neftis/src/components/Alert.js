import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading';
import Toast from './Toast';

const Alert = () => {
	const { auth, alert } = useSelector(state => state); 
	console.log({ auth, alert })
	return(
		<div>
			{alert.loading && <Loading/>}
			<Toast/>
		</div>
	)
}

export default Alert;