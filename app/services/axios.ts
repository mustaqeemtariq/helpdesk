import axios from 'axios'

import { apiHost } from '@/utils/host'

axios.defaults.baseURL = apiHost

const axiosInstance = axios.create({
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json; charset=UTF-8'
	}
})

axiosInstance.interceptors.response.use(response => {
	return response
})

export const parseErrorResponse = (error: any) => {
	return (
		error.response?.data?.message ||
		error.response?.data?.errors ||
		error.response?.data?.error ||
		error.message ||
		error.toString()
	)
}

export default axiosInstance
