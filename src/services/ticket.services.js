import axios from 'axios';
import {  API_HOST  } from './config';

const MODULE = 'tickets';

export const getService = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_HOST}/${MODULE}`, {
            headers: {
                //authorization: `bearer ${jwt}`,
            }
        }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.message));
    })
}

export const saveService = (data) => {
    return new Promise((resolve, reject) => {
        axios.post(`${API_HOST}/${MODULE}`, data, {
            headers: {

            }
        }).then(data => {
            debugger
            resolve(data.data);
        }).catch(err => reject(err.message));
    })
}

export const deleteService = (id ) => {
    return new Promise((resolve, reject) => {
        const url = `${API_HOST}/${MODULE}/${id}`;
        axios.delete(url, {
            /* 
            headers: { 
                authorization: `bearer ${jwt}` 
            } */
        }).then(data => {
            resolve(data);
        }).catch(err => reject(err.message));
    })
}

export const findService = ( id ) => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_HOST}/${MODULE}/${id}`, {
            /*
            headers: {
                authorization: `bearer ${jwt}`,
            }*/
        }).then(data => {
            resolve(data);
        }).catch(err => reject(err.message));
    })
}

export const updateService = (data, id) => {
    return new Promise((resolve, reject) => {
        axios.put(`${API_HOST}/${MODULE}/${id}`, data, {
            /*headers: {
                authorization: `bearer ${jwt}`,
            }*/
        }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.message));
    })
}