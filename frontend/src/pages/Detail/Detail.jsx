import { Link, useParams } from 'react-router-dom';
import styles from './Detail.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { apiGetTour } from '../../apis/tour';
import { useEffect } from 'react';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import { useState } from 'react';
import { formatMoney, formatDate } from '../../ultils/helpers';

const renderRatingStars = (totalRatings) => {
    const stars = [];
    const maxStars = 5; // Số sao tối đa
    for (let i = 0; i < totalRatings; i++) {
        stars.push(<i key={i} className="fas fa-solid fa-star" style={{ color: 'yellow' }}></i>);
    }
    for (let i = totalRatings; i < maxStars; i++) {
        stars.push(<i key={i} className="far fa-star" style={{ color: 'yellow' }}></i>);
    }
    return stars;
};

const Detail = () => {

    const { tourId, name, category } = useParams()
    const [tour, setTour] = useState(null)

    const fetchTours = async () => {
        const response = await apiGetTour(tourId)
        if (response.success) setTour(response.tourData)
    }
    useEffect(() => {
        if (tourId) fetchTours()
    }, [tourId])
    return (
        <div>
            <section className={styles.nice_place}>
                <div className={styles.container}>
                    <div className={styles.tour_content_text_head}>
                        <h3 className='font-semibold'>{name}</h3>
                        <Breadcrumbs name={name} category={category} />
                    </div>
                    <hr />
                    <div className={styles.tour_content} id="row">
                        <div >
                            {tour?.thumb ? (
                                <img src={tour?.thumb} alt={tour?.name} className='h-[458px] w-[458px] border object-cover' />
                            ) : (
                                <img src={tour?.images[0]} alt={tour?.name} className='h-[458px] w-[458px] border object-cover' />
                            )}
                        </div>
                        <div className={styles.tour_content_text}>
                            <h2>{tour?.name}</h2>
                            {(renderRatingStars(tour?.totalRatings).map(star => star))}
                            <hr />

                            <p><i className="fa fa-solid fa-dollar-sign"></i> Giá tour: {`${formatMoney(tour?.price || 0)} VNĐ`} </p>
                            <p><i className="fa fa-regular fa-calendar-check"></i> {`Ngày khởi hành: ${formatDate(tour?.startDate)} - ${formatDate(tour?.endDate)}`}</p>
                            <div className="flex items-center mb-2">
                                <i className="fa fa-solid fa-plane mr-2"></i> Vận Chuyển:
                                <div className="dropdown dropdown-right ml-2">
                                    <div tabIndex={0} role="button" className="no-underline py-2 px-2.5 rounded-lg bg-[#5dbc5d] text-white hover:bg-[#7fd97f] transition ease-in">Hiển thị</div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        {tour?.trip?.map(el => (
                                            <li key={el._id} className="mb-2 p-2 border-b border-gray-300">
                                                {`${el.vehicel} - ${el.licensePlate}`}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center mb-2">
                                <i className="fa fa-solid fa-hotel mr-2"></i>Điểm đến & khách sạn:
                                <div className="dropdown dropdown-right ml-2">
                                    <div tabIndex={0} role="button" className="no-underline py-2 px-2.5 rounded-lg bg-[#5dbc5d] text-white hover:bg-[#7fd97f] transition ease-in">Hiển thị</div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-72 p-2 shadow">
                                        {tour?.destination?.map((el, index) => (
                                            <li key={el._id} className="mb-2 p-2 border-b border-gray-300">
                                                {`Điểm: ${index + 1} ${el.name} - ${el.hotel}`}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <h2>Liên hệ</h2>
                            <Link
                                className='no-underline py-3 px-2.5 rounded-lg bg-[#5dbc5d] text-white hover:bg-[#7fd97f] transition ease-in'
                                to={`/thanhtoan/${tourId}`}><i
                                    className='fa fa-solid fa-cart-plus'></i> ĐẶT NGAY</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.tour}>
                <div className={styles.more}>
                    <div className={styles.container}>
                        <div className={styles.more_title}>
                            <h3 className={styles.title_tour}>
                                <span>Chương trình tour</span>
                            </h3>
                        </div>
                        <div className={styles.more_title_tour}>
                            <h3>Chương trình tour</h3>
                        </div>
                        <div className={styles.more_title_day}>
                            <h3>NGÀY 01: TP.HỒ CHÍ MINH - HÀ NỘI (Ăn trưa, tối)</h3>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.content_text}>
                                <p><strong className={styles.info}>Buổi sáng:</strong> Trưởng đoàn <span className={styles.highlight}>VIETNET TRAVEL</span> đón quý khách tại sân bay Tân Sơn Nhất – Ga Quốc Nội hỗ trợ làm thủ tục đáp chuyến bay đi Hà Nội.</p>
                                <p><strong className={styles.info}>Chuyến bay dự kiến:</strong></p>
                                <p className={styles.flightinfo}><strong>VIETJET AIR: VJ SGN-HAN 07h10 – 09h15</strong></p>
                                <p>Đoàn về đến Hà Nội nhận phòng khách sạn và ăn trưa.</p>
                                <p><strong className={styles.info}>Buổi chiều:</strong> Xe đưa đoàn đi tham quan:</p>
                                <div className={styles.content_list}>
                                    <ul>
                                        <li><strong>Hồ Gươm, tháp Rùa</strong></li>
                                        <li><strong>Đền Ngọc Sơn</strong></li>
                                        <li>Chụp ảnh lưu niệm tại <strong>Nhà Hát Lớn Thành Phố.</strong></li>
                                        <li>Ngồi xe điện tham quan phố cổ <strong>Hà Nội</strong> với <strong>Hàng Ngang, hàng Đào, chợ Đồng Xuân...</strong></li>
                                        <li><strong>Hồ Tây, chùa Trấn Quốc</strong> ngôi chùa cổ lịch sử lâu đời nhất Hà Nội.</li>
                                    </ul>
                                </div>
                                <p>Sau khi tham quan thành phố đoàn về nhà hàng dùng cơm tối với <strong>tiệc Buffet.</strong></p>
                                <p>Đoàn tự do dạo chơi, khám phá phố phường <strong>Hà Nội</strong> về đêm sau khi dùng bữa tối. Quý khách nghỉ đêm tại <strong>Hà Nội.</strong></p>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.more_title_tour}>
                                <h3>Lịch Khởi Hành</h3>
                            </div>
                            <table className={styles.flight_info}>
                                <thead>
                                    <tr>
                                        <th>Ngày đi:</th>
                                        <td>Chuyến bay: VJ</td>
                                        <td>Giờ bay: 07h10 – 09h15</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Ngày về:</th>
                                        <td>Chuyến bay: VJ</td>
                                        <td>Giờ bay: 15h55 – 18h05</td>
                                    </tr>
                                    <tr>
                                        <th>Hãng hàng không:</th>
                                        <td colSpan={2}>VIETJET AIR</td>
                                    </tr>
                                    <tr>
                                        <th>GIÁ TOUR HOTEL 3*</th>
                                        <td colSpan={2}>KHÁCH NGƯỜI LỚN</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={styles.content}>
                            <div className={styles.more_title_tour}>
                                <h3>Điều Khoản</h3>
                            </div>
                            <div className={styles.more_title_day}>CHI PHÍ BAO GỒM:</div>
                            <p>Xe vận chuyển máy lạnh đời mới.</p>
                            <p>Ngủ nghỉ trong chương trình: ngủ 2 người/phòng (trong trường hợp lẻ ngủ phòng 3)</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Khách sạn 3 sao</th>
                                        <th>Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowSpan={3}>Hà Nội</td>
                                        <td>Santa Barbara Hotel</td>
                                        <td><a href="http://www.santabarbara.com.vn/">http://www.santabarbara.com.vn/</a></td>
                                    </tr>
                                    <tr>
                                        <td>First Eden Hotel</td>
                                        <td><a href="http://firstedenhotel.com">http://firstedenhotel.com</a></td>
                                    </tr>
                                    <tr>
                                        <td>Dragon Pearl Hotel</td>
                                        <td><a href="http://dragonpearlhotel.com/">http://dragonpearlhotel.com/</a></td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={3}>Hạ Long</td>
                                        <td>Kenny Ha Long Hotel</td>
                                        <td><a href="http://kennyhalonghotel.com/new/">http://kennyhalonghotel.com/new/</a></td>
                                    </tr>
                                    <tr>
                                        <td>BMC Thang Long Hotel</td>
                                        <td><a href="http://www.bmcthanglonghotel.com">http://www.bmcthanglonghotel.com</a></td>
                                    </tr>
                                    <tr>

                                        <td>Blue Sky Hotel</td>
                                        <td><a href="http://www.halongblueskyhotel.com.vn">http://www.halongblueskyhotel.com.vn</a></td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={3}>Sapa</td>
                                        <td>Công đoàn Sapa Hotel</td>
                                        <td><a href="http://trade-union.com.vn/news/322.htm">http://trade-union.com.vn/news/322.htm</a></td>
                                    </tr>
                                    <tr>
                                        <td>Panorama Hotel</td>
                                        <td><a href="http://www.sapapanoramahotel.com/">http://www.sapapanoramahotel.com/</a></td>
                                    </tr>
                                    <tr>
                                        <td>Sunny Mountain Hotel</td>
                                        <td><a href="http://sunnymountainhotel.com/">http://sunnymountainhotel.com/</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.content_text}>
                                <p>Ăn trong chương trình:</p>
                                <ul>
                                    <li>Ăn sáng buffet tại khách sạn</li>
                                    <li>09 bữa chính với các món đặc sản địa phương 150.000VND/suất <strong>( các bữa ăn ở HN 170.000vnd/suất)</strong></li>
                                    <li><strong>01 bữa ăn đặc sản bánh tôm Tây Hồ</strong></li>
                                    <li><strong>01 bữa Buffet tại Hà Nội</strong></li>
                                </ul>
                                <p>Thuyền thăm quan vịnh Hạ Long, thuyền thăm Tràng An.</p>
                                <p>Vé vào cửa tham quan các điểm theo chương trình.</p>
                                <p>Vé tham quan khu du lịch Hàm Rồng và xem ca múa nhạc dân tộc tại Sa Pa.</p>
                                <p>Xe điện tham quan phố cổ Hà Nội.</p>
                                <p>Nước và khăn trên xe ôtô: 02 chai nước 500ml + 02 khăn lạnh/người/ngày <i>(Nước Aquafina của Pesico)</i></p>
                                <p>Hướng dẫn viên chuyên nghiệp, nhiệt tình, chu đáo.</p>
                                <p>Bảo hiểm du lịch mức: 100.000.000 VND.</p>
                            </div>
                            <div className={styles.more_title_day}>CHI PHÍ KHÔNG BAO GỒM:</div>
                            <div className={styles.content_text}>
                                <p>Vé máy bay khứ hồi Sài Gòn - Hà Nội - Sài Gòn. Giá vé có thể thay đổi tại thời điểm xuất vé.</p>
                                <p>Chi phí cá nhân: Tiền giặt ủi, điện thoại, đồ uống trong các bữa ăn.</p>
                                <p>Vé cáp treo Yên Tử.</p>
                                <p>Vé cáp treo Fansipan (800.000vnd/khứ hồi và tàu lửa lên đỉnh 200.000đ/ khách)</p>
                                <p>Thuế VAT</p>
                            </div>
                            <div className={styles.more_title_day}>CHI PHÍ DÀNH CHO TRẺ EM:</div>
                            <div className={styles.content_text}>
                                <p>Trẻ em từ 5 tuổi trở xuống miễn phí, gia đình tự túc cho bé</p>
                                <p>Trẻ em từ 5 - Dưới 10 tuổi tính &frac12; giá người lớn được hưởng: 1 chỗ trên xe, thuyền, 1 suất ăn như người lớn, vé tham quan và ngủ chung giường với ba mẹ.</p>
                                <p>Trẻ em 10 tuổi tính như người lớn.</p>
                            </div>
                            <div className={styles.more_title_day}>ĐIỀU KIỆN HỦY TOUR:</div>
                            <div className={styles.content_text}>
                                <p>Sau khi xác nhận và thanh toán (ít nhất 50% tiền cọc giữ chỗ và thanh toán 100% tối thiểu 24 tiếng trước ngày khởi hành), nếu:</p>
                                <p>Hủy tour 10 ngày trước ngày khởi hành: phí hủy 50% tiền tour + 100% tiền vé máy bay</p>
                                <p>Hủy tour 5 ngày trước ngày khởi hành: phí hủy 70% tiền tour + 100% tiền vé máy bay</p>
                                <p>Hủy tour trước 24h so với khởi hành: phí hủy 100% tiền tour + 100% tiền vé máy bay</p>
                            </div>
                        </div>
                        <div className={styles.notes_section}>
                            <h3>MỘT SỐ LƯU Ý KHÁC:</h3>
                                <ul>
                                    <li>Đón các chuyến bay hạ cánh từ 09h00 – 11h30 và tiễn các chuyến bay cất cánh từ 15h00 – 16h30.</li>
                                    <li>Các điểm tham quan trong chương trình có thể thay thứ tự để phù hợp với tình hình thực tế.</li>
                                </ul>
                            <p>
                                ** Trong trường hợp khách quan như: khủng bố, thiên tai, ... hoặc do có sự cố, sự thay đổi lịch trình
                                của các phương tiện vận chuyển công cộng như: máy bay, tàu hỏa, ... thì công ty sẽ giữ quyền thay
                                đổi lộ trình chuyến du lịch bất cứ lúc nào vì sự an toàn và thuận tiện cho khách hàng và sẽ không
                                chịu trách nhiệm bồi thường những thiệt hại phát sinh.
                            </p>
                            <p className={styles.highlight}>Chúc quý khách một chuyến đi thú vị và bổ ích!</p>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.more_title_tour}>
                                <h3>Thông tin cần biết</h3>
                            </div>
                            <div className={styles.content_text}>
                                <p>Đặc điểm khí hậu ở miền Bắc thường thay đổi theo từng vùng, từng mùa. Nên các bạn nhớ trang bị quần áo phù hợp theo mùa và điểm đến, ưu tiên gọn nhẹ, nhưng phải đủ ấm. Vào mùa hè thời tiết phụ thuộc vào từng khu vực, có thể ăn mặc thoải mái nhưng vẫn cần một chiếc áo khoác. Mùa đông hơi lạnh lẽo, nên chọn áo ấm, găng tay, khăn, mũ len các loại để chống chọi cái rét lạnh miền Bắc.</p>
                            </div>
                            <div className={styles.button_container}>
                                <Link to={`/thanhtoan/${tourId}`} className={styles.btn_text}>ĐẶT NGAY</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Detail;
