import axios from 'axios';

export const getDataApi = async (url, token) => {
	const res = await axios.get(`/api/${url}`, {
		headers : { Authorization: token }
	})
	return res;
}

export const postDataApi = async (url, post, token) => {
	const res = await axios.post(`url/${url}`, post, {
		header: {Authorization: token}
	})
	return res;
}

export const putDataApi = async (url, post, token) => {
	const res = await axios.put(`url/${url}`, post, {
		header: {Authorization: token}
	})
	return res;
}

export const patchDataApi = async (url, post, token) => {
	const res = await axios.patch(`url/${url}`, post, {
		header: {Authorization: token}
	})
	return res;
}

export const deleteDataApi = async (url, token) => {
	const res = await axios.delete(`url/${url}`, {
		header: {Authorization: token}
	})
	return res;
}