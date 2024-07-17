import axios from "../axios";

export const apiRegister = (data) => axios({
    url: '/api/user/register',
    method: 'post',
    data,
})

export const apiFinalRegister = (token) => axios({
    url: '/api/user/finalregister/' + token,
    method: 'put',
})

export const apiLogin = (data) => axios({
    url: '/api/user/login',
    method: 'post',
    data
})

export const apiForgotPassword = (data) => axios({
    url: '/api/user/forgotpassword',
    method: 'post',
    data
})

export const apiResetPassword = (data) => axios({
    url: '/api/user/resetpassword',
    method: 'put',
    data
})

export const apiGetCurrent = () => axios({
    url: '/api/user/current',
    method: 'get',
})