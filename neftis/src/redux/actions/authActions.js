import { postDataApi } from '../../utils/fetchDataApi';

export const TYPES = {
	AUTH : 'AUTH'
}

export const login = (data) => async (dispatch) => {
	try {
		const res = await postDataApi('login', data);
		console.log(data);
		dispatch({
			type: 'AUTH',
			payload: {
				token: res.data.accessToken,
				user: res.data.user,
			} 
		})
		
		localStorage.setItem('login', true)
	} catch (error) {
		console.log(error.response.data.msg)
	}
}