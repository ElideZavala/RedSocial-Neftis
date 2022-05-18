import { postDataApi } from '../../utils/fetchDataApi';
import { ALERT_TYPES } from "./alertActions";

export const TYPES = {
	AUTH : 'AUTH'
}

export const login = (data) => async (dispatch) => {
	try {
		dispatch({
			type: ALERT_TYPES.ALERT,
			payload: {
				loading: true,
			}
		})
		const res = await postDataApi('login', data);
		console.log(data);
		dispatch({
			type: 'AUTH',
			payload: {
				token: res.data.accessToken,
				user: res.data.user,
			} 
		})
		
		localStorage.setItem('login', true);

		dispatch({
			type: ALERT_TYPES.ALERT,
			payload: {
				success:res.data.msg,
			}
		})
	} catch (error) {
		console.log(error.response.data.msg)
		dispatch({
			type: ALERT_TYPES.ALERT,
			payload: {
				success:error.response.data.msg,
			}
		})
	}
}