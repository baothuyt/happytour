import styles from './HeaderPage.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';

const HeaderPage = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar_left}>
        <img src="/img/_Travel.png" alt="Logo" className={styles.logo} />
      </div>
      <nav className={styles.navbar_center}>
        <Link to="/" className={styles.nav_item}><i className="fas fa-home"></i> Trang chủ</Link>
        <Link to="/locations" className={styles.nav_item}><i className="fas fa-map-marker-alt"></i> Địa điểm</Link>
        <a href="#" className={styles.nav_item}><i className="fas fa-users"></i> Về chúng tôi</a>
        <Link to="/blog" className={styles.nav_item}><i className="fas fa-camera"></i> Blog</Link>
        <a href="#" className={styles.nav_item}><i className="fas fa-phone"></i> Liên hệ</a>
      </nav>
      <div className={styles.navbar_right}>
        <span>USD</span>
        <img src="vietnam-flag.png" alt="Vietnam Flag" className={styles.flag} />
        <i className="fas fa-question-circle"></i>
        <span>Đăng chỗ nghỉ của Quý vị</span>
        <button className={styles.btn}>Đăng ký</button>
        <button className={styles.btn}>Đăng nhập</button>
      </div>
    </header>
  );
};

export default HeaderPage;
