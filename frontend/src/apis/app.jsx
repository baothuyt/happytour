import axios from "../axios";

export const apiGetCategories = () => axios({
    url: '/api/tour-category',
    method: 'get'
})
