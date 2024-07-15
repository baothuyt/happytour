import axios from "../axios";

export const apiGetTours = (params) => axios({
    url: '/api/tour',
    method: 'get',
    params
})

export const apiGetTour = (tourId) => axios({
    url: '/api/tour/' +tourId,
    method: 'get'
})
