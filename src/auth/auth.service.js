import axios from 'axios'
import { errorHandler } from '../utils/error';
const authApiConfig = require('../config/auth.api.config')


exports.signin = (params) => {
    return axios.post(authApiConfig.login, {
        username: params.username,
        password: params.password
    })
        .then(resp => {
            return resp.data
        })
        .catch(err => {
            return errorHandler({ err })
        });
}

exports.register = () => {
    return axios.post(authApiConfig.register, {
        username: 'ahmed',
        password: '123d'
    })
        .then(resp => {
            console.log(resp);
            return resp.data
        })
        .catch(err => {
            return errorHandler({ err })
        });
}

