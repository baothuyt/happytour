import axios from "../axios";

export const apiGetCategories = () => axios({
    url: '/api/tour-category',
    method: 'get'
});

export const apiUpdateCategory = (id, data) => axios({
    url: `/api/tour-category/${id}`,
    method: 'put',
    data
});

export const apiDeleteCategory = (id) => axios({
    url: `/api/tour-category/${id}`,
    method: 'delete'
});

export const apiAddCategory = () => axios({
    url: '/api/tour-category',
    method: 'post',
   
});
