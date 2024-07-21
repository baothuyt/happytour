export const createSlug = string => string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-')
export const formatMoney = number => Number(number.toFixed(1)).toLocaleString()
export const formatRating = (star, ratings) => {
    if (typeof star !== 'number' || isNaN(star) && typeof ratings !== 'number' || isNaN(ratings)) {
        return undefined;
    }

    if (star >= 4 && star <= 5) {
        return `⭐ ${star}/5 Tuyệt vời ( ${ratings} lượt đánh giá)`;
    } else if (star >= 2 && star < 4) {
        return `⭐ ${star}/5 Trung bình ( ${ratings} lượt đánh giá)`;
    } else if (star > 0 && star < 2) {
        return `⭐ ${star}/5 Tệ ( ${ratings} lượt đánh giá)`;
    } else {
        return 'Chưa có lượt đánh giá';
    }
}

export const validate = (payload, setInvalidFields) => {
    let invalids = 0
    const formatPayload = Object.entries(payload)
    for (let arr of formatPayload) {
        if (arr[1].trim() === '') {
            invalids++
            setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Require this field.' }])
        }
    }
    // for (let arr of formatPayload) {
    //     switch (arr[0]) {
    //         case 'email':
    //             const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //             if (!arr[1].match(regex)) {
    //                 invalids++
    //                 setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Email invalid.' }])
    //             }
    //             break;
    //         case 'password':
    //             if (arr[1].length < 6) {
    //                 invalids++
    //                 setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Password minimum 6 characters.' }])
    //             }
    //             break;
    //         default:
    //             break;
    //     }
    // }
    return invalids
} 
export function getBase64(file){
    if (!file) return ''
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}