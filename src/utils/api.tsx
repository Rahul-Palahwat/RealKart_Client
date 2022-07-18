import { create } from 'apisauce'
import { server_user } from '../BaseURL'
import { server_item } from '../BaseURL'

export const api_item = create({
	baseURL: server_item,
	headers: {
		Accept: "application/json",
		"Cache-Control": "no-cache",
		"Content-Type": "application/json",
	},
	timeout: 45000,
})
export const api_user = create({
	baseURL: server_user,
	headers: {
		Accept: "application/json",
		"Cache-Control": "no-cache",
		"Content-Type": "application/json",
	},
	timeout: 45000,
})