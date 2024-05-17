
import { useState } from 'react';
import styles from './Headers.module.css'; // Import the CSS module

const Headers = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header>
      <div className={styles.header_top}>
        <i className="fas fa-bars" onClick={handleMenuClick}></i>
        <ul className={`${isMenuActive ? styles.active : ''}`}>
        <li style={{ '--x': 1 }}><a href="">Trang chủ</a></li>
        <li style={{ '--x': 2 }}><a href="">Địa điểm</a></li>
        <li style={{ '--x': 3 }}><a href="">Về chúng tôi</a></li>
        <li style={{ '--x': 4 }}><a href="">Blog</a></li>
        <li style={{ '--x': 5 }}><a href="">Liên hệ</a></li>
        <li style={{ '--x': 6 }}><a href="">Tài khoản</a></li>
      </ul>
      </div>
      <div className={styles.video_container}>
        <video src="/img/bn2.mp4" autoPlay muted loop></video>
      </div>
      
    </header>
  );
};

export default Headers;