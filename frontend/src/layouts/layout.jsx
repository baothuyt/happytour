import PropTypes from 'prop-types';
import Footer from "@/components/footer/Footer";
import '@/index.css';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="section">
        {children}
      </div>
      <Footer/>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
