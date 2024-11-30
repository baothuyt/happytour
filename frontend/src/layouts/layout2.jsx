// import React from 'react';
import PropTypes from 'prop-types';
import Footer from "@/components/footer/Footer";
import '@/index.css';
import HeaderPage from '@/components/header-page/HeaderPage';

const Layout2 = ({ children }) => {
  return (
    <div>
      <HeaderPage/>
      <div className="section">
        {children}
      </div>
      <Footer/>
    </div>
  );
};

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout2;