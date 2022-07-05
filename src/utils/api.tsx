import { create } from 'apisauce'
import { server } from '../BaseURL'

export const api = create({
	baseURL: server,
	headers: {
		Accept: "application/json",
		"Cache-Control": "no-cache",
		"Content-Type": "application/json",
	},
	timeout: 45000,
})