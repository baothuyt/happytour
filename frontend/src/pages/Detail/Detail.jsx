import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';
// import Footer from './../Footer/Footer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { apiGetTour } from '../../apis/tour';
import { useEffect } from 'react';
//import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import { useState } from 'react';
import { } from '../../ultils/helpers'



const Detail  = () => {
    
    const { tourId, name} = useParams()
    const [tour, setTour] = useState(null)

    const fetchTours = async () => {
        const response = await apiGetTour(tourId)
        if (response.success) setTours(response.toursData)
    }
    useEffect(() => {
        if (tourId) fetchTours()
    }, [tourId])
    return (
        <div>
            
            <section className={styles.nice_place}>
                <div className={styles.container}>
                    <div className={styles.tour_content_text_head}>
                        {/* <h3>{name}</h3> */}
                        {/* <Breadcrumbs/> */}
                        {/* <span>Trang chủ &gt; Tour miền bắc &gt; HÀ NỘI - NINH BÌNH - HẠ LONG - YÊN TỬ - SA PA (đường cao tốc) - HÀ NỘI</span> */}
                    </div>
                    <hr />
                    <div className={styles.tour_content} id="row">
                        <div className={styles.tour_content_img}>
                                {/* <img src="https://qltt.vn/stores/news_dataimages/trunglb/052022/19/11/4539_2-BaDinh-08-1440985910.jpg?rt=20220519114541" alt="" /> */}
                            <img src= {tour?.image} alt="" />
                                
                        </div>
                        <div className={styles.tour_content_text}>
                            <h2>{tour?.name}</h2>
                                <hr />
                            <p><i className="fa-regular fa-clock"></i> Thời gian: 6 NGÀY 5 ĐÊM</p>
                            <p><i className="fa-regular fa-calendar-check"></i> Ngày Khởi Hành: Thứ 5 Hàng Tuần</p>
                            <p><i className="fa-solid fa-plane"></i> Vận Chuyển: VIETJET AIR</p>
                            <p><i className="fa-solid fa-hotel"></i> Khách Sạn: 3*</p>
                            <p><i className="fa-solid fa-lightbulb"></i> Mã Tour: MB6NSĐ-APL</p>
                            <h2>Liên hệ</h2>
                            <button><i className='fa-solid fa-cart-plus'></i> ĐẶT NGAY</button>
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
                                <ul>
                                    <li><strong>Hồ Gươm, tháp Rùa</strong></li>
                                    <li><strong>Đền Ngọc Sơn</strong></li>
                                    <li>Chụp ảnh lưu niệm tại <strong>Nhà Hát Lớn Thành Phố.</strong></li>
                                    <li>Ngồi xe điện tham quan phố cổ <strong>Hà Nội</strong> với <strong>Hàng Ngang, hàng Đào, chợ Đồng Xuân...</strong></li>
                                    <li><strong>Hồ Tây, chùa Trấn Quốc</strong> ngôi chùa cổ lịch sử lâu đời nhất Hà Nội.</li>
                                </ul>
                                <p>Sau khi tham quan thành phố đoàn về nhà hàng dùng cơm tối với <strong>tiệc Buffet.</strong></p>
                                <p>Đoàn tự do dạo chơi, khám phá phố phường <strong>Hà Nội</strong> về đêm sau khi dùng bữa tối. Quý khách nghỉ đêm tại <strong>Hà Nội.</strong></p>
                            </div>
                        </div>
                        <div className={styles.more_title_day}>
                            <h3>NGÀY 02: HÀ NỘI - TRÀNG AN - BÁI ĐÍNH - HẠ LONG (Ăn sáng, trưa, tối)</h3>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.content_text}>
                                <p><strong>07h00:</strong> HDV làm thủ tục trả phòng sau khi ăn sáng. Đoàn đi tham quan:</p>
                                <ul>
                                    <li><strong>KDL Tràng An – Ninh Bình</strong>_Di sản thiên nhiên thế giới, một vùng non nước, mây trời hòa quyện. Đáy nước trong xanh soi bóng những vách núi đá trùng điệp. Nơi đây có tới 31 hồ, đầm nước được nối thông bởi 48 hang, động đã được phát hiện trong đó có những hang xuyên thủy dài 2km như hang <strong>Địa Linh</strong>, hang <strong>Sinh Dược</strong>, hang <strong>Mây...</strong></li>
                                </ul>
                                <p>Đoàn về nhà hàng ăn trưa với <strong>đặc sản Cơm Cháy Dê Núi.</strong></p>
                                <p><strong className={styles.info}>Buổi chiều:</strong> Đoàn tiếp tục tham quan <strong>Chùa Bái Đính</strong> – ngôi chùa lớn nổi tiếng <strong>Miền Bắc,</strong> lễ phật cầu an.</p>
                                <p><strong>14h00:</strong> Xe đưa đoàn rời <strong>Ninh Bình,</strong> theo Quốc Lộ 10 đi <strong>Hạ Long</strong> trên đường đi quý khách sẽ được cảm nhận cuộc sống, phong cảnh đặc trưng của <strong>Đồng Bằng Bắc Bộ</strong> với cảnh làng quê thanh bình qua các tỉnh <strong>Nam Định, Thái Bình, Hải Phòng.</strong> Đến <strong>Hạ Long,</strong> HDV làm thủ tục nhận phòng khách sạn, vệ sinh cá nhân, sau đó di chuyển đến nhà hàng dùng bữa tối.</p>
                                <p><strong className={styles.info}>Buổi tối:</strong> Đoàn tự do đi dạo chợ đêm Hạ Long, ngắm cảnh thành phố về đêm, đoàn nghỉ đêm tại Hạ Long.</p>
                            </div>
                        </div>
                        <div className={styles.more_title_day}>
                            <h3>NGÀY 03: HẠ LONG - YÊN TỬ - HÀ NỘI (Ăn sáng, trưa, tối)</h3>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.content_text}>
                                <p><strong>07h00:</strong> Quý khách dùng bữa sáng <strong>Buffet</strong> tại khách sạn.</p>
                                <p>Sau đó, HDV đưa đoàn xuống thuyền tham quan:</p>
                                <ul>
                                    <li>Vịnh <strong>Hạ Long</strong> – di sản thiên nhiên thế giới được <strong>UNESCO</strong> công nhận, chiêm ngưỡng vẻ đẹp huyền bí của hàng ngàn đảo đá và các hang động kỳ thú.</li>
                                    <li><strong>Động Thiên Cung,</strong> ngắm cảnh <strong>Làng Chài, hòn Ấm, hòn Rùa, hòn Đỉnh Hương, hòn Chó Đá, hòn gà Chọi...</strong></li>
                                </ul>
                                <p>Đoàn di chuyển về nhà hàng dùng bữa trưa.</p>
                                <p><strong className={styles.info}>Buổi chiều:</strong> Xe đưa đoàn đi tham quan khu danh thắng <strong>đất Phật Yên Tử</strong> – đất tổ của Thiền Phái Trúc Lâm. Quý khách đi Cáp Treo, tham quan Vườn Tháp Tổ, Chùa Hoa Yên <i>(Chi phí cáp treo tự túc)</i>.</p>
                                <p>Sau đó khởi hành về Hà Nội, trên đường dừng chân thưởng thức đặc sản <strong>bánh đậu xanh Hải Dương</strong>. Về Hà Nội nhận phòng, nghỉ ngơi.</p>
                                <p><strong className={styles.info}>Buổi tối:</strong> Quý khách dùng bữa tối với đặc sản <strong>bánh tôm Hồ Tây.</strong></p>
                                <p>Sau khi ăn tối quý khách tự do dạo chơi ngắm cảnh Hà Nội về đêm, thưởng thức các món ngon đặc trưng <strong>Hà thành</strong>. Đoàn nghỉ đêm tại <strong>Hà Nội.</strong></p>
                            </div>
                        </div>
                        <div className={styles.more_title_day}>
                            <h3>NGÀY 04: HÀ NỘI - LÀO CAI - SAPA - KDL HÀM RỒNG (Ăn sáng, trưa, tối)</h3>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.content_text}>
                                <p><strong>07h00:</strong> Sau khi ăn sáng, HDV làm thủ tục trả phòng khách sạn.</p>
                                <p>Xe đưa đoàn lên khu du lịch <strong>Sapa</strong> – nơi mà người Pháp xưa gọi là <strong>“kinh đô mùa hè của xứ Bắc Kỳ”.</strong></p>
                                <p>Đến <strong>Sapa</strong> quý khách ăn trưa, nhận phòng khách sạn.</p>
                                <p><strong className={styles.info}>Buổi chiều:</strong></p>
                                <p className={styles.option_header}><strong>OPTION 1:</strong></p>
                                <p>Quý khách tham quan:</p>
                                <ul>
                                    <li><strong>Khu du lịch núi Hàm Rồng</strong> với: vườn Lê, vườn Táo Mèo, Cổng trời, vườn hoa Châu Âu, chinh phục đỉnh săn Mây cao 1800m – ngắm toàn cảnh Sapa từ trên cao.</li>
                                    <li><strong>Xem biểu diễn chương trình ca múa nhạc</strong> đặc sắc của vùng núi Tây Bắc do các chàng trai cô gái người dân tộc H’mông, Dao, Tày, Hà Nhì... biểu diễn. Ăn tối tại nhà hàng.</li>
                                </ul>
                                <p className={styles.option_header}><strong>OPTION 2: ĐI CÁP TREO FANSIPAN (PHỤ THU 800.000VND/KHÁCH và Xe Lửa lên đỉnh núi 200.000đ/khách)</strong></p>
                                <p>Xe đưa quý khách đi tham quan:</p>
                                <ul>
                                    <li><strong>Chinh phục đỉnh Fansipan</strong> <i>bằng hệ thống cáp treo lớn và hiện đại nhất Thế Giới hiện nay (1 cabin có thể ngồi từ 34-35 người).</i> Tới đỉnh Fansipan quý khách thưởng thức cảm giác đứng trên mây, ngắm nhìn thị trấn Sapa, sau đó tiếp tục leo 639 bậc để tận mắt thấy cột mốc Fansipan độ cao 3.143m nơi được coi là “nóc nhà Đông Dương”. Đến nhà hàng ăn tối.</li>
                                </ul>
                                <p><strong className={styles.info}>Buổi tối:</strong> Quý khách đi dạo chơi TT.Sapa về đêm, tự do thưởng thức: Thắng Cố, cơm lam, lợn cắp nách, khoai nướng, bắp nướng... Nghỉ đêm tại thị trấn Sapa.</p>
                            </div>
                        </div>
                        <div className={styles.more_title_day}>
                            <h3>NGÀY 05: SAPA - BẢN CÁT CÁT - LÀO CAI - HÀ NỘI (Ăn sáng, trưa, tối)</h3>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.content_text}>
                                <p><strong>07h00:</strong> Quý khách dùng bữa sáng tại khách sạn, sau đó xe đưa đoàn đi tham quan:</p>
                                <ul>
                                    <li><strong>Bản Cát Cát</strong> - địa bàn cư trú của người <strong>H-Mông,</strong> ngắm cảnh hùng vĩ của núi rừng <strong>Tây Bắc,</strong> tham quan <strong>Thác Thủy Điện</strong> do Pháp xây dựng.</li>
                                </ul>
                                <p>Đoàn di chuyển đến nhà hàng ăn trưa.</p>
                                <p><strong className={styles.info}>Buổi chiều:</strong> Xe đưa đoàn đi tham quan <strong>Lào Cai,</strong> cửa khẩu <strong>Lào Cai,</strong> thăm quan chợ vùng biên <strong>Cốc Lếu</strong>.</p>
                                <p>Sau đó khởi hành về <strong>Hà Nội</strong> theo tuyến đường cao tốc dài nhất <strong>Việt Nam Lào Cai - Hà Nội 250km.</strong></p>
                                <p><strong className={styles.info}>Buổi tối:</strong> Đến <strong>Hà Nội</strong> quý khách ăn tối. Sau đó nhận phong khách sạn và nghỉ đêm tại <strong>Hà Nội</strong>.</p>
                            </div>
                        </div>
                        <div className={styles.more_title_day}>
                            <h3>NGÀY 06: HÀ NỘI - TP.HỒ CHÍ MINH (Ăn sáng, trưa)</h3>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.content_text}>
                                <p><strong>07h00:</strong> Quý khách ăn sáng tại khách sạn, HDV giúp quý khách làm thủ tục trả phòng.</p>
                                <p>Xe đưa đoàn vào viếng lăng <strong>Chủ tịch Hồ Chí Minh, Phủ Chủ Tịch, Ao Cá Nhà Sàn, Chùa Một Cột, sau đó tham quan Văn Miếu - Quốc Tử Giám</strong> trường Đại học đầu tiên của <strong>Việt Nam</strong>, mua đặc sản <strong>Hà Nội</strong>.</p>
                                <p>Đoàn di chuyển về nhà hàng ăn trưa.</p>
                                <p>Sau đó xe đưa quý khách đi sân bay <strong>Nội Bài</strong> làm thủ tục đáp chuyến bay về Hồ Chí Minh.</p>
                                <p><strong className={styles.info}>Chuyến bay dự kiến:</strong></p>
                                <p className={styles.flightinfo}><strong>VIETJET AIR: VJ HAN - SGN 15h55 – 18h05</strong></p>
                                <p>Đến <strong>Hồ Chí Minh,</strong> chào tạm biệt và kết thúc chương trình.</p>
                            </div>
                        </div>

                        <div className={styles.content}>
                            <div className={styles.more_title_tour}>
                                <h3>Lịch Khởi Hành</h3>
                            </div>
                            <table className={styles.flight_info}>
                                <tr>
                                    <th>Ngày đi:</th>
                                    <td>Chuyến bay: VJ</td>
                                    <td>Giờ bay: 07h10 – 09h15</td>
                                </tr>
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
                            <p>
                                <ul>
                                    <li>Đón các chuyến bay hạ cánh từ 09h00 – 11h30 và tiễn các chuyến bay cất cánh từ 15h00 – 16h30.</li>
                                    <li>Các điểm tham quan trong chương trình có thể thay thứ tự để phù hợp với tình hình thực tế.</li>
                                </ul>
                            </p>
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
                                <button className={styles.btn_text}>ĐẶT NGAY</button>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
            
        </div>
    );
};

export default Detail;