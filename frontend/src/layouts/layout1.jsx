// import React from 'react';
import PropTypes from 'prop-types';
import '@/index.css';
import HeaderUser from '@/components/header/HeaderUser';

const Layout1 = ({ children }) => {
  return (
    <div>
      <HeaderUser />
      <div className="section">
        {children}
      </div>
    </div>
  );
};

Layout1.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout1;
