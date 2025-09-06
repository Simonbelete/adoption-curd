import axios from 'axios';
import { API_URL } from '$env/static/private';

export const data_provider = axios.create({
	baseURL: API_URL,
	timeout: 1000 // Set timeout
});
