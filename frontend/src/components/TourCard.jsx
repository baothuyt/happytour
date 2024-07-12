import React from 'react'
import styles from '../pages/Searchtour/Searchtour.module.css'
import {formatRating, formatMoney} from '../ultils/helpers'
function TourCard({price, totalRatings, name, image, description, ratings}) {
  return (
    <div className={styles.card}>
                        <img src={image} alt={`${name}'s image`} />
                        <div className={styles.content}>
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <div className={styles.rating}>{formatRating(totalRatings, ratings)}</div>
                            {/* <div className={styles.options}>Có lựa chọn hủy miễn phí</div> */}
                            <div className={styles.price}>{`${formatMoney(price)} VNĐ`}</div>
                            <button className={styles.btn_check}>Đặt tour ngay &#10095;</button>
                        </div>
                    </div>
  )
}

export default TourCard
