// import React from 'react';
import PropTypes from 'prop-types';
// import Footer from "../components/Footer/Footer";
// import Headers from "../components/Header/Headers";
import '../index.css';
import Headeruser from '../components/Header/Headeruser';

const Layout1 = ({ children }) => {
  return (
    <div>
      <Headeruser/>
      <div className="section">
        {children}
      </div>
      {/* <Footer/> */}
    </div>
  );
};

Layout1.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout1;



// import Headers from '../components/Header/Headers';
// import Footer from "../components/Footer/Footer";
// import '../index.css';

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Headers/>
//       <div className="section">
//         {children}
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default Layout;