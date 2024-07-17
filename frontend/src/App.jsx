import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Layout1 from "./layouts/layout1";
import Layout2 from "./layouts/layout2";
import HomePages from "./pages/HomePages";
import Dangnhap from "./pages/dangnhap"
import Dangky from "./pages/dangky";
import Searchtour from "./pages/Searchtour/Searchtour";
import Thanhtoan from "./pages/thanhtoan";
import ThaydoiThongtinCaNhan from "./pages/changett";
import BookingHistory from "./pages/bookinghistory";
import Detail from "./pages/Detail/Detail";
import BlogList from "./pages/Blog";
import AdminLayout from "./layouts/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import UsersPage from "./pages/admin/UsersPage";
import BookingPage from "./pages/admin/BookingPage";
import CategoryPage from "./pages/admin/CategoryPage";
import TourPage from "./pages/admin/TourPage";
import TourActivePage from "./pages/admin/TourActivePage";
import CommentPage from "./pages/admin/CommentPage";
import FinalRegister from "./pages/public/FinalRegister";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "./store/app/actions";
import ResetPassword from "./pages/public/ResetPassword";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  return (
  <>
      <Routes>
        <Route path="/" element={<Layout><HomePages /></Layout>} />
        <Route path="/search" element={<Layout2><Searchtour /></Layout2>} />
        <Route path="/:category/:tourId/:name" element={<Layout2><Detail /></Layout2>} />
        <Route path="/blog" element={<Layout2><BlogList /></Layout2>} />
        <Route path="/dangky" element={<Layout1><Dangky /></Layout1>} />
        <Route path="/dangnhap" element={<Layout1><Dangnhap /></Layout1>} />
        <Route path="/thanhtoan" element={<Layout2><Thanhtoan /></Layout2>} />
        <Route path="/bookinghistory" element={<Layout2><BookingHistory /></Layout2>} />
        <Route path="/thaydoi" element={<Layout1><ThaydoiThongtinCaNhan /></Layout1>} />
        <Route path="/home" element={<Layout><HomePages /></Layout>} />
        <Route path="/finalregister/:status" element={<FinalRegister />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="user" element={<UsersPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="tour" element={<TourPage />} />
          <Route path="tour-active" element={<TourActivePage />} />
          <Route path="comment" element={<CommentPage />} />
        </Route>
      </Routes>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      {/* Same as */}
      <ToastContainer />
  </>
  );
}

export default App;
