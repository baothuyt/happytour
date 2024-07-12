import { useState } from 'react';
import styles from './Headers.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';
import videoSource from '../../assets/bn2.mp4';

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
          <li style={{ '--x': 1 }}><Link to="/">Trang chủ</Link></li>
          <li style={{ '--x': 2 }}><Link to="/locations">Địa điểm</Link></li>
          <li style={{ '--x': 3 }}><Link to="/about">Về chúng tôi</Link></li>
          <li style={{ '--x': 4 }}><Link to="/blog">Blog</Link></li>
          <li style={{ '--x': 5 }}><Link to="/contact">Liên hệ</Link></li>
          <li style={{ '--x': 6 }}><Link to="/dangky">Tài khoản</Link></li>
        </ul>
      </div>
      <div className={styles.video_container}>
        <video src={videoSource} autoPlay muted loop>phat</video>
      </div>
    </header>
  );
};

export default Headers;
