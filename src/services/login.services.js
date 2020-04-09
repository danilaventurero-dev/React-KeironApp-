import axios from 'axios';
import {  API_HOST  } from './config';

const MODULE = 'login';

export const loginService = (data) => {
    return new Promise((resolve, reject) => {
        axios.post(`${API_HOST}/${MODULE}`, data, {
            headers: {

            }
        }).then(data => {
            resolve(data);
        }).catch(err => reject(err.message));
    })
}