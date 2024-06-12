import styles from './HomePages.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Headers from '../components/Header/Headers';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const HomePages  = () => {
    
 
    
    return (
        <div>
            <Headers/>
            <section>
                <div className={styles.booking_search_box}>
                    <input type="text" placeholder="Bạn muốn đi đâu?"/>
                    <input type="date" placeholder="Check-in"/>
                    <input type="date" placeholder="Check-out"/>
                    <select>
                        <option value="1">1 Người</option>
                        <option value="2">2 Người</option>
                        <option value="3">3 Người</option>
                        <option value="4">4 Người</option>
                    </select>
                    <button>Tìm kiếm</button>
                </div>
            </section>
            <section className={styles.nice_place}>
                <div className={styles.container}>
                    <h1>Địa Điểm Nổi Bật</h1>
                    <div className={styles.row} id="row">
                        <div className={styles.nice_place_item}>
                            <div className={styles.nice_place_img}>
                                <img src="https://www.vinagrouptravel.com/Media/images/sapa-mua-lua-chin.jpg" alt="" />
                            </div>
                            <div className={styles.nice_place_text}>
                                <h2> Tour Tây Bắc</h2>
                                <i className="fas fa-solid fa-star"></i>
                                <i className="fas fa-solid fa-star"></i>
                                <i className="fas fa-solid fa-star"></i>
                                <i className="fas fa-solid fa-star"></i>
                                <i className="fas fa-solid fa-star"></i>
                                <p>Nhắc đến Tây Bắc, chúng ta liên tưởng ngay đến những dãy núi non hùng vĩ trùng điệp, 
                                    những bản sương giăng, những đèo mây phủ, những ruộng bậc thang kỳ vỹ, 
                                    những cánh rừng hoa ban-mơ-mai-mận-đào,… 
                                    tất cả hòa quyện lại làm nên một Tây bắc vô cùng quyến rũ. </p>
                                <button>Mua Tour</button>
                            </div>
                        </div>

                        <div className={styles.nice_place_item}>
                            <div className={styles.nice_place_img}>
                                <img src="https://qltt.vn/stores/news_dataimages/trunglb/052022/19/11/4539_2-BaDinh-08-1440985910.jpg?rt=20220519114541" alt="" />
                                
                            </div>
                            <div className={styles.nice_place_text}>
                                <h2> Tour Hà Nội</h2>
                                <i className="fas fa-solid fa-star"></i>
                                <i className="fas fa-solid fa-star"></i>
                                <i className="fas fa-solid fa-star"></i>
                                <i className="fas fa-solid fa-star"></i>
                                <i className="fas fa-solid fa-star"></i>
                                
                                <p>Hà Nội là điểm đến hấp dẫn nếu bạn muốn khám phá du lịch miền Bắc. 
                                    Chuyến hành trình du lịch Hà Nội “gây thương nhớ” với du khách bởi một màu sắc rất riêng, 
                                    “rất Hà Nội”. Đó là những phố cổ xưa cũ, các di tích lịch sử nhuốm màu thời gian và vô số địa điểm giải trí đầy thú vị khác.</p>
                                <button>Mua Tour</button>
                            </div>
                        </div>

                        <div className={styles.nice_place_item}>
                            <div className={styles.nice_place_img}>
                                <img src="https://hieutour.com.vn/public/upload/images/hinhsanpham/can-tho-da-lat-3-ngay-3-dem---hd3ncdl2-45661687860163.jpg" alt="" />
                                
                            </div>
                            <div className={styles.nice_place_text}>
                                <h2> Tour Đà Lạt</h2>
                                <i className="fas fa-solid fa-star"></i>
                                <i className="fas fa-solid fa-star"></i>
                                <i className="fas fa-solid fa-star"></i>
                                <i className="fas fa-solid fa-star"></i>
                                <i className="fas fa-solid fa-star"></i>
                                
                                <p>Du lịch Đà Lạt níu chân du khách tứ phương bởi vẻ đẹp lãng mạn, mộng mơ trong tiết trời se lạnh, 
                                    không khí trong lành, dễ chịu. Nơi đây có rất nhiều địa điểm du lịch Đà Lạt nổi tiếng, thích hợp để du khách ngắm cảnh, tham quan,
                                    trải nghiệm các hoạt động vui chơi, check in thú vị.</p>
                                <button>Mua Tour</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
           <section>
                <div className={styles.more}>
                        <div className={styles.discover}>
                            <div className={styles.discover_img}>
                                <div className={styles.img_right}>
                                <div className={styles.right}>
                                    <div className={styles.right_top}>
                                    <img className={styles.img_right_top} alt=""
                                        src="https://vpdt.vietrantour.com.vn/data/upload/2022/0525/du-lich-ban-dao-son-tra-hinh-anh2-1.jpg"
                                    />
                                    </div>
                                    <div className={styles.right_bot}>
                                    <img
                                        className={styles.img_right_bot}
                                        alt=""
                                        src="https://nguyengiahotel.com/wp-content/uploads/2020/04/img8.jpg"
                                    />
                                    </div>
                                </div>
                                </div>
                                <div className={styles.img_center}>
                                <div className={styles.box_center}>
                                    <div className={styles.center_right_top}>
                                    <img className={styles.img_center_right_top} alt="" src="https://dulichduthuyen.com.vn/tour/vnt_upload/tour/du_thuyen_da_nang.jpg" />
                                    </div>
                                    <div className={styles.center_left_top}>
                                    <img className={styles.img_center_left_top} alt="" src="https://image.tinnhanhchungkhoan.vn/1200x630/Uploaded/2024/bpikpjik/2023_06_14/da-nang-5-8014.jpg" />
                    
                                    <div className={styles.box_text}>
                                        <div className={styles.heading_container}>
                                        <span className={styles.head_container}>
                                            <p className={styles.head_text}>THIÊN ĐƯỜNG NGHỈ DƯỠNG</p>
                                            <p className={styles.head_text}>đà nẵng</p>
                                        </span>
                                        </div>
                                        <div className={styles.box_content}>
                                        <span className={styles.head_container}>
                                            <p className={styles.head_text}>
                                            Địa điểm du lịch xinh đẹp Đà Nẵng nằm tại miền trung
                                            Việt Nam, khí hậu ôn
                                            </p>
                                            <p className={styles.head_text}>
                                            hòa và thời tiết mát mẻ quanh năm, nơi đây bao gôm các
                                            địa danh du lịch nổi
                                            </p>
                                            <p className={styles.head_text}>tiếng […..]</p>
                                        </span>
                                        </div>
                                        <div className={styles.link}>
                                        <a >Xem Thêm...</a>
                                        <div className={styles.before}></div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className={styles.center_bot_r}>
                                    <img className={styles.img_bot_r} alt="" src="https://www.quangbinhtravel.vn/wp-content/uploads/2013/05/ca-chep-rong.jpg" />
                                    </div>
                                    <div className={styles.center_bot_ct}>
                                    <img className={styles.img_center_bot_ct} alt="" src="https://owa.bestprice.vn/images/articles/uploads/top-15-cac-dia-diem-du-lich-da-nang-hot-nhat-ban-khong-the-bo-qua-5ed9cb93af7eb.jpg" />
                                    </div>
                                    <div className={styles.center_bot_b}>
                                    <img className={styles.img_bot_r} alt="" src="https://duan-sungroup.com/wp-content/uploads/2022/10/khu-vuon-co-tich-giua-long-da-nang-e1665823875574.png" />
                                    </div>
                                </div>
                                </div>
                                <div className={styles.img_left}>
                                <div className={styles.left}>
                                    <div className={styles.right_top}>
                                    <img
                                        className={styles.img_right_top}
                                        alt=""
                                        src="https://vcdn1-dulich.vnecdn.net/2022/06/02/Son-Tra-2238-1654169672.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=FScJfxXuNeEPtYatWhzlZg"
                                    />
                                    </div>
                                    <div className={styles.right_bot}>
                                    <img
                                        className={styles.img_right_bot}
                                        alt=""
                                        src="https://booking.muongthanh.com/images/news/2022/07/original/thumbnail_1657768372.jpg"
                                    />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className={styles.discover_text}>
                                <div className={styles.quotes}>
                                <span className={styles.head_container}>
                                    <p className={styles.head_text}>
                                    Bạn quá ngột ngạt với khói bụi thành phố, mệt mỏi với những lo
                                    toan thường ngày.
                                    </p>
                                    <p className={styles.head_text}>
                                    Đặt ngay chuyến du lịch để tạm xa thành phố, hòa mình thiên
                                    nhiên tươi đẹp.
                                    </p>
                                </span>
                                </div>
                                <div className={styles.discover_content}>
                                <div className={styles.h_container}>
                                    <span className={styles.head_container}>
                                    <p className={styles.head_text}>
                                        <span className={styles.ndd}>Những điểm đến </span>
                                        <b className={styles.tv}>THÚ VỊ</b>
                                    </p>
                                    <p className={styles.head_text}>
                                        <span className={styles.ang}>đang </span>
                                        <b className={styles.tv}>CHỜ ĐÓN</b>
                                        <span className={styles.ang}> bạn </span>
                                        <b>KHÁM PHÁ !</b>
                                    </p>
                                    </span>
                                </div>
                                </div>
                            </div>
                        </div>
                </div>
           </section>
            
            <section className={styles.tour}>
                <div className={styles.container}>
                    <h1>Tour Hè 2024</h1>
                    <div className={styles.tour_content} id="row">
                        <div className={styles.tour_content_item} id="row">
                            <div className={styles.tour_content_item_img}>
                                <img src="https://cdn3.ivivu.com/2023/10/du-lich-Da-Lat-ivivu.jpg" alt="" />
                                
                            </div>
                            <div className={styles.tour_content_item_text}>
                                <h2>Đà Lạt</h2>
                                <p>Đà Lạt là thủ phủ của tỉnh Lâm Đồng. Với độ cao 1.500 m trên mặt nước biển. tiết trời Đà Lạt mát lạnh, là nơi nghỉ dưỡng lý tưởng ở khu vực miền Nam.</p>
                                <button>Khám phá</button>
                            </div> 
                        </div>
                        <div className={styles.tour_content_item} id="row">
                            <div className={styles.tour_content_item_img}>
                                <img src="https://lh5.googleusercontent.com/proxy/wyG_LljX3QV2RZjPMpns6tn1rIpke_-6AWZgk2gMw2brKy4xz75JSSXCvh_XGMT7Lh668oomHjmz2zkjZVS5ZMhRQjR-zu53x4GZ6OMQ0eTE_aypLgC0jo4nF3LvrkwIL43cSP2vLRxQOiFDbMghutJcUiKsaGijTP478e6qrqA" alt="" />
                                
                            </div>
                            <div className={styles.tour_content_item_text}>
                                <h2>Hội An</h2>
                                <p>Đà Lạt là thủ phủ của tỉnh Lâm Đồng. Với độ cao 1.500 m trên mặt nước biển. tiết trời Đà Lạt mát lạnh, là nơi nghỉ dưỡng lý tưởng ở khu vực miền Nam.</p>
                                <button>Khám phá</button>
                            </div> 
                        </div>
                
                    
                        <div className={styles.tour_content_item} id="row">
                            <div className={styles.tour_content_item_img}>
                                <img src="https://vcdn1-dulich.vnecdn.net/2023/07/12/HL1-9875-1689130357.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=mN2YMaNq5Vgj_oi6A_s91Q" alt="" />
                                
                            </div>
                            <div className={styles.tour_content_item_text}>
                                <h2>Vịnh Hạ Long</h2>
                                <p>Đà Lạt là thủ phủ của tỉnh Lâm Đồng. Với độ cao 1.500 m trên mặt nước biển. tiết trời Đà Lạt mát lạnh, là nơi nghỉ dưỡng lý tưởng ở khu vực miền Nam.</p>
                                <button>Khám phá</button>
                            </div> 
                        </div>
                    
                    
                        <div className={styles.tour_content_item} id="row">
                            <div className={styles.tour_content_item_img}>
                                <img src="https://static.vinwonders.com/production/check-in-hue-1.jpg" alt="" />
                                
                            </div>
                            <div className={styles.tour_content_item_text}>
                                <h2>Huế</h2>
                                <p>Đà Lạt là thủ phủ của tỉnh Lâm Đồng. Với độ cao 1.500 m trên mặt nước biển. tiết trời Đà Lạt mát lạnh, là nơi nghỉ dưỡng lý tưởng ở khu vực miền Nam.</p>
                                <button>Khám phá</button>
                            </div> 
                        </div>
                
                    
                        <div className={styles.tour_content_item} id="row">
                            <div className={styles.tour_content_item_img}>
                                <img src="https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA" alt="" />
                                
                            </div>
                            <div className={styles.tour_content_item_text}>
                                <h2>Đà Nẵng</h2>
                                <p>Đà Nẵng là thành phố của những cây cầu và được mệnh danh là thành phố đáng sống nhất Việt Nam. Nổi tiếng với hình ảnh Cầu Rồng vừa mạnh mẽ vừa uy nghiêm, thành phố phố Đà Nẵng được thiên nhiên ưu ái ban tặng những bãi biển trong xanh cùng hàng loạt hòn đảo ấn tượng.</p>
                                <button>Khám phá</button>
                            </div> 
                        </div>
                    
                    
                        <div className={styles.tour_content_item} id="row">
                            <div className={styles.tour_content_item_img}>
                                <img src="https://i-dulich.vnecdn.net/2022/07/05/pho-cao-ha-giang-8752-16487185-3640-9541-1657019231.jpg" alt="" />
                                
                            </div>
                            <div className={styles.tour_content_item_text}>
                                <h2>Hà Giang</h2>
                                <p>Bạn có thể du lịch Hà Giang vào bất kỳ mùa nào trong năm. Người ta thường đến Hà Giang vào mùa thu lúa chín vàng. Thời gian đẹp nhất là tháng 10, 11 và 12, khi hoa tam giác mạch hay những cánh đồng cải khoe sắc. Còn mùa xuân, hoa mơ, hoa mận nở trắng rừng khiến bạn như đang bồng bềnh trên mây.</p>
                                <button>Khám phá</button>
                            </div> 
                        </div>
                    </div>

                </div>
            </section>
            
            <section id="review" className={styles.review}>
                <div className={styles.container}>
                    <h1>Đánh giá trải nghiệm</h1>
                    <div className={styles.review_content} id="row">
                        <div className={styles.review_item}>
                            <div className={styles.review_item_text}>
                                <img src="https://cdn-icons-png.flaticon.com/256/5038/5038992.png" alt="" />
                                
                                <p>
                                    <span>&ldquo;</span>
                                    Đà Lạt về đêm không thể thiếu chợ đêm - điểm đến du khách muốn khám phá sự sôi động của thành phố này. Chợ đêm diễn ra từ chiều tối với một loạt các gian hàng bày bán đủ loại hàng hóa. 
                                    <span>&rdquo;</span>
                                </p>
                            </div>
                            <div className={styles.review_item_img} id="row">
                                <img src="https://i.pinimg.com/474x/00/a7/f7/00a7f7a8c0c30c7e3e2ed058694d3dc0.jpg" alt=""/>
                                <div className={styles.review_item_img_text}>
                                    <h2>User1</h2>
                                    <p>Ngày 12/2/2024</p>
                                </div>
                            
                            </div>
                        </div>
                        <div className={styles.review_item}>
                            <div className={styles.review_item_text}>
                                <img src="https://cdn-icons-png.flaticon.com/256/5038/5038992.png" alt=""/>
                                <p>
                                    <span>&ldquo;</span>
                                    Đà Lạt về đêm không thể thiếu chợ đêm – điểm đến du khách muốn khám phá sự sôi động của thành phố này. Chợ đêm diễn ra từ chiều tối với một loạt các gian hàng bày bán đủ loại hàng hóa. 
                                    <span>&rdquo;</span>
                                </p>
                            </div>
                            <div className={styles.review_item_img} id="row">
                                <img src="https://i.pinimg.com/474x/75/38/fa/7538faf4f63892f332e8bcea79b7a930.jpg" alt=""/>
                                <div className={styles.review_item_img_text}>
                                    <h2>User2</h2>
                                    <p>Ngày 12/2/2024</p>
                                </div>
                            
                            </div>
                        </div>
                        <div className={styles.review_item}>
                            <div className={styles.review_item_text}>
                                <img src="https://cdn-icons-png.flaticon.com/256/5038/5038992.png" alt=""/>
                                <p>
                                    <span>&ldquo;</span>
                                    Đà Lạt về đêm không thể thiếu chợ đêm – điểm đến du khách muốn khám phá sự sôi động của thành phố này. Chợ đêm diễn ra từ chiều tối với một loạt các gian hàng bày bán đủ loại hàng hóa. 
                                    <span>&rdquo;</span>
                                </p>
                            </div>
                            <div className={styles.review_item_img} id="row">
                                <img src="https://i.pinimg.com/474x/49/e8/a8/49e8a877294b37f0a16f5ec79b6cb60d.jpg" alt=""/>
                                <div className={styles.review_item_img_text}>
                                    <h2>User3</h2>
                                    <p>Ngày 12/2/2024</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        
                        
            <section id="contact" className={styles.contact}>
                <div className={styles.container}>
                    <h1>Danh sách tour</h1>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                       
                        >
                        <SwiperSlide className='swiper_container ' >
                            
                            <a href="#the-weeknd" className={styles.event}>
                                <div className={styles.event__image}>
                                    <img src="https://static.vinwonders.com/2022/11/phuot-mien-nam-3.jpg" alt="The Weeknd" className={styles.zoomImage}/>
                                    <div className={`${styles.event__indicator} ${styles.event__date}`}>
                                        Miền Tây <div className={styles.event__date__month}>
                                        8 Tour
                                        </div>
                                    </div>


                                </div>
                                
                            </a>
                        </SwiperSlide>
                       
                        <SwiperSlide >
                            <a href="#the-weeknd" className={styles.event}>
                                <div className={styles.event__image}>
                                    <img src="https://vtv1.mediacdn.vn/thumb_w/640/562122370168008704/2023/10/23/phu-quoc-1-1698055838982645990788.jpg"
                                        alt="The Weeknd" className={styles.zoomImage} />
                                    <div className={`${styles.event__indicator} ${styles.event__date}`}>
                                        Phú Quốc <div className={styles.event__date__month}>
                                            10 Tour
                                        </div>
                                    </div>
                                    

                                </div>
                                
                            </a>
                        </SwiperSlide>
                        <SwiperSlide >
                            <a href="#the-weeknd" className={styles.event}>
                                <div className={styles.event__image}>
                                    <img src="https://www.kkday.com/vi/blog/wp-content/uploads/du-lich-sapa.jpg"
                                        alt="The Weeknd" className={styles.zoomImage}/>
                                    <div className={`${styles.event__indicator} ${styles.event__date}`}>
                                        SaPa <div className={styles.event__date__month}>
                                            5 Tour
                                        </div>
                                    </div>
                                    

                                </div>
                                
                            </a>
                        </SwiperSlide>
                        <SwiperSlide >
                            <a href="#the-weeknd" className={styles.event}>
                                <div className={styles.event__image}>
                                    <img src="https://image.nhandan.vn/w800/Uploaded/2024/igpcvcvjntc8510/2023_02_08/trang-an-5882.jpg.webp"
                                        alt="The Weeknd" className={styles.zoomImage}/>
                                    <div className={`${styles.event__indicator} ${styles.event__date}`}>
                                        Ninh Bình <div className={styles.event__date__month}>
                                        6 Tour
                                        </div> 
                                    
                                    </div>
                                    
                                </div>
                                
                            </a>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </section>
            
        </div>
        
     
    );
};

export default HomePages;