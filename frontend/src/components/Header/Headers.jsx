import { useEffect, useState } from 'react';
import styles from './Headers.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';
import videoSource from '../../assets/bn2.mp4';
import { getCurrent } from '../../store/users/asyncActions';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdLogOut } from "react-icons/io";
import { logout } from '../../store/users/userSlice';

const Headers = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  // isLoggedIn become true if we login
  const dispatch = useDispatch()
  const { isLoggedIn, current } = useSelector(state => state.user)
  // Then useEffect be called to get data
  useEffect(() => {
    if (isLoggedIn) dispatch(getCurrent())
  }, [dispatch, isLoggedIn])

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
          <li style={{ '--x': 6 }}>
            {isLoggedIn
              ? <div className='flex items-center gap-2 bg-[#5dbc5d] rounded-l-[24px] rounded-r-none'>
                <Link to={'/thaydoi'}>{`Welcome, ${current?.lastname} ${current?.firstname}`}</Link>
                <Link onClick={()=> dispatch(logout())} className='border-x-2 rounded-[24px] px-3'>
                  <IoMdLogOut size={22}/>
                </Link>
              </div>
              : <Link to="/dangnhap">Tài khoản</Link>}
          </li>
        </ul>
      </div>
      <div className={styles.video_container}>
        <video src={videoSource} autoPlay muted loop>phat</video>
      </div>
    </header>
  );
};

export default Headers;
