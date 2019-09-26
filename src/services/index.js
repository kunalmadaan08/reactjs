import axios from 'axios';
import {CONFIG} from '../config';

export function getAllContracts(){
	let url = `${CONFIG.API_URL}/contacts`;
	return axios.get(url).catch(response=>response.response)
}