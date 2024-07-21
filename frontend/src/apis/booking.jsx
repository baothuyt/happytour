import axios from "../axios";

export const apiCreateBooking = (data) => axios({
    url: '/api/booking',
    method: 'post',
    data
})
