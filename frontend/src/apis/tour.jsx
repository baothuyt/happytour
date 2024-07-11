import axios from "../axios";

export const apiGetTours = (params) => axios({
    url: '/api/tour',
    method: 'get',
    params
})