import styles from './Searchtour.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { createSlug } from '../../ultils/helpers'
import {useSelector} from 'react-redux'

const Search = () => {
    const {categories} = useSelector(state => state.app);

    return (
        <div>

            <section>
                <div className={styles.booking_search_box}>
                    <input type="text" placeholder="Bạn muốn đi đâu?" />
                    <input type="date" placeholder="Check-in" />
                    <input type="date" placeholder="Check-out" />
                    <select>
                        <option value="1">1 Người</option>
                        <option value="2">2 Người</option>
                        <option value="3">3 Người</option>
                        <option value="4">4 Người</option>
                    </select>
                    <button>Tìm kiếm</button>
                </div>
            </section>
            <section className={styles.results_section}>
                <aside className={styles.filters}>
                    <h3>Lọc</h3>
                    <div className={styles.filter_item}>
                        {categories?.map(el => (
                            <NavLink
                                key={createSlug(el.name)}
                                to={createSlug(el.name)}
                            >
                                {el.name}
                            </NavLink>
                        ))}
                        {/* <p>Địa điểm</p>
                        <label><input type="checkbox" /> Hà Nội</label>
                        <label><input type="checkbox" /> Đà Lạt</label>
                        <label><input type="checkbox" /> Đà Nẵng</label> */}
                    </div>
                </aside>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <img src="https://qltt.vn/stores/news_dataimages/trunglb/052022/19/11/4539_2-BaDinh-08-1440985910.jpg?rt=20220519114541" alt="Tour 1" />
                        <div className={styles.content}>
                            <h3>Buổi biểu diễn múa rối nước Thăng Long</h3>
                            <p>Vé xem biểu diễn tại nhà hát múa rối nước Thăng Long, Hà Nội</p>
                            <div className={styles.rating}>⭐ 4.5 / 5 Tuyệt vời (754 đánh giá)</div>
                            <div className={styles.options}>Có lựa chọn hủy miễn phí</div>
                            <div className={styles.price}>Từ €4,45</div>
                            <button className={styles.btn_check}>Xem chỗ trống &#10095;</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="path-to-image2.jpg" alt="Tour 2" />
                        <div className={styles.content}>
                            <h3>Tour Vịnh Hạ Long cả ngày có kèm bữa trưa, đi từ Hà Nội</h3>
                            <p>Du thuyền với trải nghiệm chèo thuyền kayak, đi bộ đường dài và bơi lội trong vịnh</p>
                            <div className={styles.rating}>⭐ 4.4 / 5 Tuyệt vời (192 đánh giá)</div>
                            <div className={styles.options}>Có lựa chọn hủy miễn phí</div>
                            <div className={styles.preference}>Lựa chọn ưa thích của du khách đi một mình</div>
                            <div className={styles.price}>Từ US$61,50</div>
                            <button className={styles.btn_check}>Xem chỗ trống &#10095;</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="path-to-image3.jpg" alt="Tour 3" />
                        <div className={styles.content}>
                            <h3>Tour đi bộ tham quan thành phố có hướng dẫn viên</h3>
                            <p>Cùng hướng dẫn viên đi bộ và khám phá một số điểm tham quan hàng đầu ở Hà Nội</p>
                            <div className={styles.rating}>⭐ 4.5 / 5 Tuyệt vời (213 đánh giá)</div>
                            <div className={styles.options}>Có lựa chọn hủy miễn phí</div>
                            <div className={styles.preference}>Lựa chọn ưa thích của du khách đi theo nhóm</div>
                            <div className={styles.price}>Từ US$5</div>
                            <button className={styles.btn_check}>Xem chỗ trống &#10095;</button>
                        </div>
                    </div>
                    <div className={styles.load_more_container}>
                        <p>Bạn đã xem 120 trong số 1103 địa điểm tham quan</p>
                        <button className={styles.load_more_button}>Hiển thị thêm</button>
                    </div>
                </div>
            </section>
            {/* <Footer /> */}
        </div>
    );
};

export default Search;