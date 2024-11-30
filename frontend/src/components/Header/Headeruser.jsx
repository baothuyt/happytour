import { Link } from 'react-router-dom';
import styles from "./HeaderUser.module.css";

const HeaderUser = () => {
    return (
        <div className={styles.box}>
            <div className={styles.headeruser}>
                <Link to={'/'}>
                    <img className={styles.rectangle} src="/img/_Travel.png" alt="Travel Logo" />
                </Link>
            </div>
        </div>
    );
}

export default HeaderUser;
