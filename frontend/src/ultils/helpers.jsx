export const createSlug = string => string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-')
export const formatMoney = number => Number(number.toFixed(1)).toLocaleString()
export const formatRating = (star, ratings) => {
    if (typeof star !== 'number' || isNaN(star) && typeof ratings !== 'number' || isNaN(ratings) ) {
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
